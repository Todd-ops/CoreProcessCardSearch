import { Component, OnInit } from '@angular/core';
import { DataAccessService } from '../shared/data-access.service'
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'plant2070-process-card',
  templateUrl: './plant2070-process-card.component.html',
  styleUrls: ['./plant2070-process-card.component.css']
})
export class Plant2070ProcessCardComponent implements OnInit {
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
    this.data.get2070ProcessCard().subscribe((name: any)=>{
      this.Job = name;
      console.log(this.Job)
    });

    this.searchForm = this.fb.group({
      Job: []
    });

    this.searchForm.get("Job")?.valueChanges.subscribe((selectedValue: any) =>{
      console.log('Job Changed')
      console.log(selectedValue)
      this.url = (`http://rdweb/CEBOS_ProcessCards/2070/${selectedValue}`);
      console.log(this.url)
      this.iFrameUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
      this.displayIFrame = true;
    })



  }



  // onSelectChange(event: any){
  //   const Jobs = event
  //   this.data.get2070ProcessCard().subscribe((response => {
  //     this.Job = response;

  //   }))
  //   // this.url = (`http://rdweb/CEBOS_ProcessCards/${Jobs}`);
  //   // this.iFrameUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  //   // this.displayIFrame = true;
  //   // console.log(this.url)
  //   // console.log(this.displayIFrame)
  // }

  // getUrl(event: any){
  //   const evo = event
  //   // this.url = (`http://rdweb/CEBOS_ProcessCards/2070/${event}`);
  //   this.iFrameUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  //   this.displayIFrame = true;
  //   console.log(this.url)
  //   console.log(this.displayIFrame)
  // }

  // openNewTab(name: any){
  //   this.url = (`http://rdweb/CEBOS_ProcessCards/${name}`);
  //   window.open(this.url, "_blank");
  //   console.log(this.url);
  // }
}
