import { ReactiveFormsModule } from '@angular/forms';
import { JokesComponent } from './jokes.component';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { JokeFormComponent } from '../joke-form/joke-form.component';

@NgModule({
    declarations: [JokesComponent, JokeFormComponent],
    imports: [SharedModule, ReactiveFormsModule],
    exports: [JokesComponent]
})

export class JokesModule {

}
