import{a as ee}from"./chunk-QASMQ3KX.js";import{A as Q,B as $,h as G,i as V,j as D,k as d,l as j,m as P,p as B,q as L,r as z,s as U,t as H,u as W,v as J,w as K,x as X,y as Y,z as Z}from"./chunk-G7IQPZER.js";import{$a as M,Aa as b,Gb as F,Hb as w,Ka as u,Na as l,Nb as O,P as y,Qa as r,Ra as t,Sa as m,Tb as q,Ua as E,Ub as A,Wb as T,Xa as o,Z as C,Za as R,_a as S,ab as N,c as x,cb as I,db as k,wa as g,za as a}from"./chunk-Q72HHEJZ.js";var f=class e{app=O(ee);db=T(this.app);constructor(){}agregarEncuesta(i){return x(this,null,function*(){q(A(this.db,"encuesta"),{encuesta:i}),console.log(i)})}static \u0275fac=function(p){return new(p||e)};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})};var re=()=>({standalone:!0});function ie(e,i){e&1&&(r(0,"p",31),o(1,"Apellido requerido"),t())}function ae(e,i){e&1&&(r(0,"p",31),o(1,"Nombre requerido"),t())}function le(e,i){e&1&&(r(0,"p",31),o(1,"edad requerida"),t())}function me(e,i){e&1&&(r(0,"p",32),o(1," debe ser mayor a 18 "),t())}function de(e,i){e&1&&(r(0,"p",32),o(1," debe ser menor a 99 "),t())}function pe(e,i){e&1&&(r(0,"p",31),o(1,"numero requerido"),t())}function se(e,i){e&1&&(r(0,"p",32),o(1," deben ser menos de 10 numeros "),t())}function ue(e,i){e&1&&(r(0,"p",31),o(1,"genero requerido"),t())}var te=class e{constructor(i,p){this.encuestasService=i;this.fb=p;this.formRepartidor=this.fb.group({apellido:["",d.required],nombre:["",d.required],edad:["",d.required,d.min(18),d.max(99)],numero:["",d.required,d.maxLength(10)],rango:["",d.required],genero:["",d.required],conforme:["",d.required]})}formRepartidor;encuestado={apellido:"0",nombre:"",edad:0,numero:0,rango:0,genero:"",conforme:!1};ngOnInit(){}get numeroGet(){return this.formRepartidor.get("numero")}get edadGet(){return this.formRepartidor.get("edad")}enviar(){this.formRepartidor.markAllAsTouched(),this.encuestado.apellido=this.formRepartidor.get("apellido")?.value,this.encuestado.nombre=this.formRepartidor.get("nombre")?.value,this.encuestado.edad=this.formRepartidor.get("edad")?.value,this.encuestado.numero=this.formRepartidor.get("numero")?.value,this.encuestado.rango=this.formRepartidor.get("rango")?.value,this.encuestado.genero=this.formRepartidor.get("genero")?.value,this.encuestado.conforme=this.formRepartidor.get("conforme")?.value,this.encuestasService.agregarEncuesta(this.encuestado)}static \u0275fac=function(p){return new(p||e)(b(f),b(Z))};static \u0275cmp=C({type:e,selectors:[["app-encuesta"]],standalone:!0,features:[I],decls:61,vars:14,consts:[["lang","en"],["charset","utf-8"],["name","viewport","content","width=device-width, initial-scale=1"],["name","description","content",""],["name","author","content","Mark Otto, Jacob Thornton, and Bootstrap contributors"],["name","generator","content","Hugo 0.84.0"],["href",g`https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css`,"rel","stylesheet","integrity","sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor","crossorigin","anonymous"],["rel","canonical","href",g`https://getbootstrap.com/docs/5.0/examples/checkout/`],[1,"bg-light","encuesta"],[1,"container"],[1,"py-5","text-center"],[1,"row","g-5"],[3,"formGroup"],[1,"row","g-3"],["for","lastName",1,"form-label"],["type","text","id","apellido","placeholder","Apellido","formControlName","apellido",1,"form-control"],["class","text-danger",4,"ngIf"],["for","firstName",1,"form-label"],["type","text","id","nombre","placeholder","Nombre","formControlName","nombre",1,"form-control"],["for","address",1,"form-label"],["type","number","id","edad","placeholder","Edad","formControlName","edad","min","18","max","99",1,"form-control"],["class","warningForm",4,"ngIf"],["type","number","id","numero","placeholder","Numero","formControlName","numero","maxlength","10",1,"form-control"],["type","range","name","rango","id","rango","min","0","max","10","value","0",1,"form-control",3,"ngModelChange","ngModel","ngModelOptions"],["type","radio","formControlName","genero","value","hombre"],["type","radio","formControlName","genero","value","mujer"],["type","radio","formControlName","genero","value","otro"],[1,"col-md-11"],["type","checkbox","name","conforme","id","conforme","formControlName","conforme"],[1,"my-4"],["type","submit",1,"w-100","btn","btn-primary","btn-lg",3,"click","disabled"],[1,"text-danger"],[1,"warningForm"]],template:function(p,n){if(p&1&&(r(0,"html",0)(1,"head"),m(2,"meta",1)(3,"meta",2)(4,"meta",3)(5,"meta",4)(6,"meta",5)(7,"link",6)(8,"link",7),t(),r(9,"body",8)(10,"div",9)(11,"main")(12,"div",10)(13,"h2"),o(14,"Encuesta"),t()(),r(15,"div",11)(16,"form",12)(17,"div",13)(18,"label",14),o(19,"Apellido"),t(),m(20,"input",15),u(21,ie,2,0,"p",16),t(),r(22,"label",17),o(23,"Nombre"),t(),m(24,"input",18),u(25,ae,2,0,"p",16),r(26,"label",19),o(27,"Edad"),t(),m(28,"input",20),u(29,le,2,0,"p",16)(30,me,2,0,"p",21)(31,de,2,0,"p",21),r(32,"label",19),o(33,"Numero de telefono"),t(),m(34,"input",22),u(35,pe,2,0,"p",16)(36,se,2,0,"p",21),r(37,"label",19),o(38),t(),r(39,"input",23),N("ngModelChange",function(s){return M(n.encuestado.rango,s)||(n.encuestado.rango=s),s}),t(),r(40,"label",19),o(41,"Como se autopercibe?"),t(),m(42,"br")(43,"input",24),o(44," Hombre "),m(45,"br")(46,"input",25),o(47," Mujer "),m(48,"br")(49,"input",26),o(50," No Binario / Otros "),m(51,"br"),u(52,ue,2,0,"p",16),r(53,"div",27)(54,"label",19),o(55,"Se siente conforme con el dise\xF1o?\xA0"),t(),m(56,"input",28),o(57,"SI "),t(),m(58,"hr",29),r(59,"button",30),E("click",function(){return n.enviar()}),o(60,"Enviar"),t()()()()()()()),p&2){let c,s,h,v,_;a(16),l("formGroup",n.formRepartidor),a(5),l("ngIf",(c=n.formRepartidor.get("apellido"))==null?null:c.errors),a(4),l("ngIf",(s=n.formRepartidor.get("nombre"))==null?null:s.errors),a(4),l("ngIf",(h=n.formRepartidor.get("edad"))==null?null:h.errors),a(),l("ngIf",n.edadGet==null||n.edadGet.errors==null?null:n.edadGet.errors.min),a(),l("ngIf",n.edadGet==null||n.edadGet.errors==null?null:n.edadGet.errors.max),a(4),l("ngIf",(v=n.formRepartidor.get("numero"))==null?null:v.errors),a(),l("ngIf",n.numeroGet==null||n.numeroGet.errors==null?null:n.numeroGet.errors.maxLength),a(2),R("Como calificarias la pagina? ",n.encuestado.rango," /10"),a(),S("ngModel",n.encuestado.rango),l("ngModelOptions",k(13,re)),a(13),l("ngIf",(_=n.formRepartidor.get("genero"))==null?null:_.errors),a(7),l("disabled",n.formRepartidor.invalid)}},dependencies:[G,w,F,Q,L,D,z,H,V,U,j,P,Y,X,K,B,$,W,J],styles:["[_nghost-%COMP%]{display:flex;align-items:stretch;justify-content:center}.encuesta[_ngcontent-%COMP%]{margin-top:20px;background-color:#f8f8f8;padding:20px;border-radius:5px;box-shadow:0 0 10px #0003;margin-bottom:20px}h2[_ngcontent-%COMP%]{text-align:center;color:green;border-radius:10px;font-size:35px;font-weight:700}button[_ngcontent-%COMP%]{max-height:25vh;margin:0rem .5rem;padding:5px 1rem;background-color:#32cd32;justify-content:center;align-items:center;display:flex;border:1px solid black;border-radius:5px;transition:background-color .3s ease}button[_ngcontent-%COMP%]:hover{background-color:#36b036}.bd-placeholder-img[_ngcontent-%COMP%]{font-size:1.125rem;text-anchor:middle;-webkit-user-select:none;-moz-user-select:none;user-select:none}@media (min-width: 768px){.bd-placeholder-img-lg[_ngcontent-%COMP%]{font-size:3.5rem}}"]})};export{te as EncuestaComponent};
