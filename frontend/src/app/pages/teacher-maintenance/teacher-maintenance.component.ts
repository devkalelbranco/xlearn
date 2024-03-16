import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Teacher } from './teacher';
import { XToasterService } from 'src/app/x-services/x-toaster/XToaster.service';

@Component({
  selector: 'app-teacher-maintenance',
  templateUrl: './teacher-maintenance.component.html',
  styleUrls: ['./teacher-maintenance.component.scss'],
})
export class TeacherMaintenanceComponent {

	constructor(private notificationService:XToasterService){}

	teacherForm!:FormGroup;
	teacher:Teacher = new Teacher();

	nome:FormControl = new FormControl('', [Validators.required, Validators.minLength(3)])
	descricao:FormControl = new FormControl('', [Validators.required, Validators.minLength(5)])
	horaAula:FormControl = new FormControl('', [Validators.required, Validators.min(1)])
	avaliacao:FormControl = new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)])

	labels = {
		nome: "Nome"
	}
	

	ngOnInit(){
		this.teacherForm = new FormGroup({
			nome: this.nome,
			descricao: this.descricao,
			horaAula: this.horaAula,
			avaliacao: this.avaliacao
		})
	}

	onSubmit(){
		console.log(this.teacherForm)
		if(this.teacherForm?.invalid){

			for (const field of Object.keys(this.teacherForm.controls)) {
				const fieldAux = this.teacherForm.controls[field];
				if(fieldAux.invalid){
					this.notificationService.error("Preencha os campos obrigatórios");
				}
			}

			return;
		}

		this.notificationService.success("Registro salvo com sucesso");
		this.teacherForm.reset()
	}

}
