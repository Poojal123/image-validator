import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  name = 'Angular ' + VERSION.major;

  fileChangeEvent(event) {
    let me = this;
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      console.log(reader.result);
      var width,
        height,
        myBase64 = reader.result;
      var img = new Image();
      img.src = myBase64.toString();
      img.onload = function () {
        width = img.width;
        height = img.height;
        console.log(width, '----', height);
      };
      img.onerror = function (err) {
        console.log('in error');
      };
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
}
