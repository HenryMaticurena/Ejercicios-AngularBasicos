import { TestBed } from "@angular/core/testing";
import { LoggerService } from "./logger.service";
import { TODOS } from "./test-data/todo.db";
import { TodoService } from "./todo.service";

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { isNgTemplate } from "@angular/compiler";

describe('TodoService', () => {

    let todoService: TodoService;
    let loggerSpy: any;
    let httpTestinController: HttpTestingController;

    beforeEach(() => {
        loggerSpy = jasmine.createSpyObj('LoggerService', ['log']);
        TestBed.configureTestingModule({
            imports: [ HttpClientTestingModule ],
            providers: [
                TodoService,
                { provide: LoggerService, useValue: loggerSpy }
            ]
        });
        todoService = TestBed.inject(TodoService);
        httpTestinController = TestBed.inject(HttpTestingController);
    });

    it('debería poder agregar nueva Tarea', () => {
        //const logger = new LoggerService();
        //spyOn(logger, 'log');
        todoService.add({ autor: 'PruebaAutor', titulo:'PruebaTitulo', descripcion:'PruebaDescripcion' });

        expect(todoService.todos.length).toBe(1, 'Deberiamos tener una unica tarea');
        expect(todoService.todos[0].id).toBe(1, 'El id autoincremental deberia ser 1');
        expect(todoService.autoIncrementId).toBe(2, 'El autoincremental deberia haber avanzado');
        expect(todoService.todos[0].titulo).toEqual('PruebaTitulo', 'El titulo deberia coincidir con el test');
        
        expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    });

    it('deberia borrar una tarea',() => {
        const todoBorrar = [...TODOS];
        todoService.todos = todoBorrar;

        todoService.delete(2);

        expect(todoService.todos.length).toBe(2, 'El numero de tareas debe ser 2');
        expect(todoService.todos[1].autor).toEqual('Sara');

    });

    it('deberia recuperar todas las tareas', () => {
        todoService.getAll().subscribe(todos => {
            expect(todos).toBeTruthy('No existen las tareas');
            expect(todos.length).toBe(3, 'La longitud deberia ser de 3 tareas');

            const todo = todos.find(item => item.id === 2);
            expect(todo.titulo).toEqual('Compra de mueble', 'El titulo debe ser especificado en las pruebas');
        });
        const req = httpTestinController.expectOne('http://localhost:3000/api/todos/all');
        expect(req.request.method).toBe('GET');
        req.flush(TODOS);
    });

    it('deberia recuperar una sola tarea', () => {
        todoService.getById(2).subscribe(todo => {
            expect(todo).toBeTruthy('La tarea debe existir');
            expect(todo.id).toBe(2, 'El id de la tarea debe ser 2');
        });

        const req = httpTestinController.expectOne('http://localhost:3000/api/todos/2');
        expect(req.request.method).toBe('GET');
        req.flush(TODOS[1]);
    });

    afterEach(() => {
        httpTestinController.verify();
    });
});