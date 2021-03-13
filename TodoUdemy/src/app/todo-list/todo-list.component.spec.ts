import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { AppModule } from "../app.module";
import { TODOS } from "../test-data/todo.db";
import { TodoListComponent } from "./todo-list.component";

describe('TodoListComponent', () => {

    let component: TodoListComponent;
    let fixture: ComponentFixture<TodoListComponent>;
    let el: DebugElement;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [AppModule]
        }).compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(TodoListComponent);
                component = fixture.componentInstance;
                el = fixture.debugElement;
            });
    }));

    it('Debe existir el componente', () => {
        expect(component).toBeTruthy();
        //console.log(component);
    });

    it('deberia mostrar la lista de tareas', () => {
        component.todos = TODOS;
        fixture.detectChanges();

        const cards = el.queryAll(By.css('.card'));

        expect(cards).toBeTruthy('No se pueden recuperar las cards');
        expect(cards.length).toBe(3, 'Deben ser 3 cards');
    });

    it('Deberia mostrar la primera tarea', () => {
        component.todos = TODOS;
        fixture.detectChanges();

        const todo = TODOS[0];

        const card = el.query(By.css('.card:first-child'));
        const titulo = card.query(By.css('.card-title'));
        const descripcion = card.query(By.css('.card-text'));

        expect(card).toBeTruthy('La card deberia existir');
        expect(titulo.nativeElement.textContent).toEqual(todo.titulo, 'El titulo debe coincidir');
        expect(descripcion.nativeElement.textContent).toEqual(todo.descripcion, 'La descripcion debe coincidir.');
    });

});