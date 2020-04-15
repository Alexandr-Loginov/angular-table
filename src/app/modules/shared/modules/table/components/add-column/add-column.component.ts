import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-add-column',
    templateUrl: './add-column.component.html',
    styleUrls: ['./add-column.component.scss'],
})
export class AddColumnComponent implements OnInit {
    @Input() public data;

    @Output() public controlResult = new EventEmitter();

    public addColumnGroup: FormGroup;

    constructor(private fb: FormBuilder) {}

    public ngOnInit(): void {
        this.initForm();
    }

    public submit(): void {
        this.controlResult.emit({
            type: 'addColumn',
            data: { ...this.addColumnGroup.value },
        });
    }

    private initForm() {
        this.addColumnGroup = this.fb.group({
            column: ['', Validators.required],
            defaultValue: [0, Validators.required],
        });
    }
}
