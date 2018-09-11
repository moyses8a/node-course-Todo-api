const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');

const {Todo} = require('./../models/todo');

const testTodos = [{
    text:'First test todo'
},{
    text:'Second test todo'
}]

beforeEach((done) => {
    Todo.deleteMany({}).then(() => {
        return Todo.insertMany(testTodos);
    }).then(()=> done());
});
describe('POST /todos',() => {
    it('Should create a new Todo', (done) => {
        var text = 'Test to do test';

        request(app)
        .post('/todos')
        .send({text})
        .expect(200)
        .expect((res) => {
            expect(res.body.text).toBe(text);
        })
        .end((err,res) => {
            if (err) {
                return done(err);
            }
            Todo.find({text}).then((todos) => {
                expect(todos.length).toBe(1);
                expect(todos[0].text).toBe(text);
                done();
            }).catch((e) => done(e));
        });
    });

    it('Should not create todo with invalid body data',(done) => {
        
        request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((err,res) => {
            if (err) {
                return done(err);
            }
            Todo.find().then((todos) => {
                expect(todos.length).toBe(testTodos.length);
                done();
            }).catch((e) => done(e));
        });
    })

});

describe('GET /todos',() => {
    it('Should get all todos',() => {
        request(app)
        .get('/todos')
        .expect(200)
        .expect((res) => {
            expect(res.body.todos.length).toBe(testTodos.length);
        }).end(done);
    });
});