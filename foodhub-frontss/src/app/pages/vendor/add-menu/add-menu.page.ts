import { Component, OnInit } from '@angular/core';
import {PostProvider } from '../../../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';
import {MenuService} from 'src/app/services/menu.service';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  AbstractControl
} from '@angular/forms';
@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.page.html',
  styleUrls: ['./add-menu.page.scss'],
})

export class AddMenuPage implements OnInit {

 
  product_name:string = '';
 
  product_description:string = '';

  product_price:string = '';
 
  id: number;

  public errorFeedback = {

    'product_name': {
      'required': 'Product name is required',
      'maxlength': 'Product name cannot be longer than 50 characters',
      'minlength': 'Product cannot be less than 10 characters',
      'pattern': 'Product name cannot have numbers'
    },

    'product_description': {
      'required': 'Product description is required',
      'pattern': 'Please enter a valid product description without numbers',
      'minlength': 'Product cannot be less than 10 characters'
    },
    'product_price': {
      'required': 'Product price is required',
      'pattern': 'Please enter a valid price'
    }


  }

  formErrors = {
    'product_name': '',
    'product_description': '',
    'product_price': ''
   

  }

  constructor(
    public menuService: MenuService,
    private router: Router,
    private postPvdr: PostProvider,
    private actRoute: ActivatedRoute,
    private fb: FormBuilder

    ) { }

    menuReg = this.fb.group({
      product_name: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(50), Validators.pattern('[a-zA-Z ]*$')]],
      product_description: ['', [Validators.required, Validators.minLength(10), Validators.pattern('[a-zA-Z ]*$')]],
      product_price: ['', [Validators.required, Validators.pattern('[0-9]*$')]],
    
  
    })

  ngOnInit() {

    this.actRoute.params.subscribe((data: any) => {

      this.id = data.id;
      this.product_name = data.product_name;
      this.product_description =this.product_description;
      this.product_price = data.product_price;
      
      console.log(data);
    });

    this.menuReg.valueChanges.subscribe((data)=>{
      this.logValidationErrors(this.menuReg);
    });
    
  }

  createdMenu() {
    /** 
    return new Promise(resolve => {

      const body = {

        aksi: 'add',
        product_name : this.product_name,
        product_description : this.product_description,
        product_price: this.product_price,
        category: this.category,
      };
      this.menuService.createMenus(body).subscribe(data => {
        console.log(data);
      });
      });*/


      return new Promise(resolve => {

      const body = {

        aksi: 'add',
        product_name : this.product_name,
        product_description : this.product_description,
        product_price: this.product_price,
        
       
      };
      this.menuService.createMenus(body).subscribe(data => {
        console.log(data);

      });
     
      });

    }

    logProduct(){
      console.log(this.menuReg.value);
    }

  

  /*updateMenu() {
        return new Promise(resolve => {
        const body = {
        aksi: 'update',
        item_id: this.id,
        item_name: this.item_name,
        item_description: this.item_description,
        item_price: this.item_price,
        itemStatus: this.itemStatus,

      };

      this.menuService.createMenu(body).subscribe(data => {
        console.log(data);
      });
      });

    });

  }
*/

logValidationErrors(group: FormGroup = this.menuReg): void {
  Object.keys(group.controls).forEach((key: string) => {
    const abstractControl = group.get(key);

    this.formErrors[key] = '';
    if (abstractControl && !abstractControl.valid &&
      (abstractControl.touched || abstractControl.dirty)) {
      const messages = this.errorFeedback[key];

      for (const errorKey in abstractControl.errors) {
        if (errorKey) {
          this.formErrors[key] += messages[errorKey] + ' ';
        }
      }
    }

    if (abstractControl instanceof FormGroup) {
      this.logValidationErrors(abstractControl);
    }
  });
}


}
