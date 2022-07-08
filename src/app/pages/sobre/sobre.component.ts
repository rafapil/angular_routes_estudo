import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss'],
})
export class SobreComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      // dessa forma obtemos o objeto
      (res) => console.log(res['id'], res['username'], res)
    );
    // pega os params passados depois da ? ex nome=rafa
    this.activatedRoute.queryParams.subscribe((res) => console.log(res));

    // setInterval(() => {
    //   // dessa forma é o mesmo que clicar em link interno (recomendado)
    //   this.router.navigate(['404']);

    //   // essa forma é melhor para link externo
    //   // this.router.navigateByUrl('404');
    // }, 5000);



  }
}
