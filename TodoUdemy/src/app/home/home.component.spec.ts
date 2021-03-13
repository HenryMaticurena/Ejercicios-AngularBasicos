import { DebugElement } from "@angular/core";
import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { AppModule } from "../app.module";
import { HomeComponent } from "./home.component";

fdescribe('HomeComponent', () => {

    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
    let el: DebugElement;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [AppModule]
        }).compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(HomeComponent);
                component = fixture.componentInstance;
                el = fixture.debugElement;
            });
    }));

    it('Debe existir el componente', () => {
        expect(component).toBeTruthy();
    });

    it('Deberia agregarse una tarea', fakeAsync(() => {
        setInputValue('.form-control.autor', 'pruebaAutor');
        setInputValue('.form-control.titulo', 'pruebaTitulo');
        setInputValue('.form-control.descripcion', 'pruebaDescripcion');

        const boton = el.query(By.css('.btn.btn-success'));
        boton.nativeElement.click();
        tick();
        fixture.detectChanges();

        const card = el.query(By.css('.card:first-child'));
        const titulo = card.query(By.css('.card-title'));
        const descripcion = card.query(By.css('.card-text'));

        expect(card).toBeTruthy();
        expect(titulo.nativeElement.textContent).toBe('pruebaTitulo');
        expect(descripcion.nativeElement.textContent).toBe('pruebaDescripcion');

    }));

    function setInputValue(selector: string, value: string) {
        fixture.detectChanges();
        tick();

        const inputAutor = el.query(By.css(selector));
        inputAutor.nativeElement.value = value;
        inputAutor.nativeElement.dispatchEvent(new Event('input'));
        tick();
    }
});