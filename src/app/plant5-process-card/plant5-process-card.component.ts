import { Component, OnInit } from '@angular/core';
import { DataAccessService } from '../shared/data-access.service'
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'plant5-process-card',
  templateUrl: './plant5-process-card.component.html',
  styleUrls: ['./plant5-process-card.component.css']
})
export class Plant5ProcessCardComponent implements OnInit {
  public names: any = [];
  public Job: any;
  searchForm = new FormGroup({
    Job: new FormControl()
  })
  iFrameUrl!: SafeResourceUrl;
  url!: string;
  displayIFrame = false;
  constructor(private data: DataAccessService, private fb: FormBuilder,private sanitizer: DomSanitizer) {
    this.searchForm = this.fb.group({
      Job:['']
    })
   }

  ngOnInit() {
    this.data.getPlant5ProcessCard().subscribe((name: any)=>{
      this.Job = name;
      console.log(this.Job)
    });

    this.searchForm = this.fb.group({
      Job: []
    });

    this.searchForm.get("Job")?.valueChanges.subscribe((selectedValue: any) =>{
      console.log('Job Changed')
      console.log(selectedValue)
      this.url = (`http://rdweb/CEBOS_ProcessCards/Plant5/${selectedValue}`);
      console.log(this.url)
      this.iFrameUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
      this.displayIFrame = true;
    })



  }

}
