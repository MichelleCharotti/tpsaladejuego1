import{a as E,b as M}from"./chunk-PKUTC4BC.js";import{a as Ie}from"./chunk-QASMQ3KX.js";import{A as Re,B as z,b as ge,c as fe,d as be,e as A,f as k,g as he,h,j,k as C,l as R,m as D,n as U,o as P,p as je,q as T,u as N,v as V}from"./chunk-G7IQPZER.js";import{$a as pe,A as ne,Aa as u,C as ie,Eb as ue,Fb as de,Gb as _,Hb as b,Ka as c,Mb as xe,Na as p,Nb as Ce,Ob as ve,P as re,Pb as _e,Qa as i,Qb as Me,Ra as n,Rb as ye,Sa as m,Sb as we,Ta as L,Tb as Se,U as ae,Ua as x,Ub as K,Va as f,Wb as Pe,Xa as r,Xb as Oe,Ya as se,Yb as ke,Z as d,Za as y,Zb as Ee,_a as le,ab as me,cb as g,fa as w,ga as S,mb as ce,q as oe,za as l}from"./chunk-Q72HHEJZ.js";function Ne(e,o){if(e&1&&(i(0,"div",10)(1,"h3"),r(2),n(),i(3,"strong"),r(4),n(),i(5,"strong"),r(6),n(),i(7,"strong"),r(8),n(),i(9,"strong"),r(10),n()()),e&2){let t=f();l(2),y("Puntaje de ",t.usuario.nombre,""),l(2),y("Ahorcado: ",t.usuario.datos.puntajeMaxAhorcado,""),l(2),y("Preguntados: ",t.usuario.datos.puntajeMaxPreguntados,""),l(2),y("Mayor > Menor: ",t.usuario.datos.puntajeMaxMayorMenor,""),l(2),y("Buscamina: ",t.usuario.datos.puntajeMaxBuscamina,"")}}var H=class e{constructor(o,t){this._usuario=o;this.db=t;this.obtenerTopAhorcado(),this.obtenerTopMayorMenor(),this.obtenerTopPreguntados(),this.obtenerTopBuscamina()}subscripcion=[];topAhorcado=[];topPreguntados=[];topMayorMenor=[];topBuscamina=[];ngOnDestroy(){if(this.subscripcion)for(let o of this.subscripcion)o.unsubscribe()}get usuario(){return this._usuario}obtenerTopAhorcado(){let o=this.db.obtenerTop("puntajeMaxAhorcado").subscribe(t=>{this.topAhorcado=t});this.subscripcion.push(o)}obtenerTopMayorMenor(){let o=this.db.obtenerTop("puntajeMaxMayorMenor").subscribe(t=>{this.topMayorMenor=t});this.subscripcion.push(o)}obtenerTopPreguntados(){let o=this.db.obtenerTop("puntajeMaxPreguntados").subscribe(t=>{this.topPreguntados=t});this.subscripcion.push(o)}obtenerTopBuscamina(){let o=this.db.obtenerTop("puntajeMaxBuscamina").subscribe(t=>{this.topBuscamina=t});this.subscripcion.push(o)}static \u0275fac=function(t){return new(t||e)(u(M),u(E))};static \u0275cmp=d({type:e,selectors:[["app-home"]],standalone:!0,features:[g],decls:19,vars:1,consts:[[1,"right"],["routerLink","/ahorcado"],["src","../../../assets/ahorcado.png","alt","img"],["routerLink","/preguntados"],["src","../../../assets/preguntados.png","alt","img"],["routerLink","/mayor-menor"],["src","../../../assets/mayoromenor.png","alt","img"],["routerLink","/buscamina"],["src","../../../assets/buscamina.png","alt","img"],["class","puntaje-personal left",4,"ngIf"],[1,"puntaje-personal","left"]],template:function(t,a){t&1&&(i(0,"div")(1,"div",0)(2,"button",1),m(3,"img",2),i(4,"p"),r(5,"Ahorcado"),n()(),i(6,"button",3),m(7,"img",4),i(8,"p"),r(9,"Preguntados"),n()(),i(10,"button",5),m(11,"img",6),i(12,"p"),r(13,"Mayor o Menor"),n()(),i(14,"button",7),m(15,"img",8),i(16,"p"),r(17,"Buscamina"),n()()(),c(18,Ne,11,5,"div",9),n()),t&2&&(l(18),p("ngIf",a.usuario.datos))},dependencies:[k,h,b,_],styles:["[_nghost-%COMP%]{display:flex;justify-content:center;align-items:stretch}p[_ngcontent-%COMP%]{text-decoration:none;margin:1px}.left[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;height:20vh}.right[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:10vw;margin-top:2vb;justify-content:center}ul[_ngcontent-%COMP%]{list-style:none}.izquierda[_ngcontent-%COMP%]{width:30px}.derecha[_ngcontent-%COMP%]{width:300px}.centro[_ngcontent-%COMP%]{width:50px}.right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:8vw;max-height:20vh}button[_ngcontent-%COMP%]{max-height:25vh;margin:150px 20px;padding:30px;background-color:#32cd32;justify-content:center;align-items:center;display:flex;flex-direction:column;border:1px solid black;border-radius:20px;transition:background-color .3s ease}button[_ngcontent-%COMP%]:hover{background-color:#36b036}button[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2vw;color:#fff;text-align:center;font-weight:700}.list[_ngcontent-%COMP%]{padding:1px;margin:10px;width:100%;text-align:center;border:1px solid black;border-radius:20px}.list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{width:100%;padding:5px 0;background-color:#32cd32;border:1px solid black;border-radius:20px}.lista-texto-izquierda[_ngcontent-%COMP%]{display:inline-block;width:5%;text-align:start;margin-right:5px}.lista-texto-centro[_ngcontent-%COMP%]{display:inline-block;width:85%;text-align:start}.lista-texto-derecha[_ngcontent-%COMP%]{margin:0 5px;display:inline-block;width:10%;text-align:end;background-color:#32cd32}li[_ngcontent-%COMP%]{font-size:20px;font-weight:600;width:100%;display:flex;border-bottom:1px solid #333}ul[_ngcontent-%COMP%]{width:100%}.puntaje-personal[_ngcontent-%COMP%]{border-radius:5px;padding:50px 60px;justify-content:center;align-items:center;display:flex;border:1px solid black;background-color:#f5f5f5}.puntaje-personal[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:28px;text-align:center;color:green;font-weight:700}.puntaje-personal[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;font-size:20px;font-weight:300}"]})};function ze(e,o){e&1&&(i(0,"small",12),r(1," Debe Ingresar Un Usuario "),n())}function He(e,o){e&1&&(i(0,"small",12),r(1," Al Menos 16 Caracteres "),n())}function qe(e,o){e&1&&(i(0,"strong",12),r(1," Usuario y/o Contrase\xF1a Invalidos "),n())}function Be(e,o){e&1&&(i(0,"strong"),r(1," Validando Credenciales "),n())}var G=class e{constructor(o,t,a){this.dbUsuarios=o;this.login=t;this.router=a;this.formularioLogin=new U({nombre:new P("",[C.required]),password:new P("",[C.minLength(16),C.required])})}formularioLogin;loginInvalido=!1;validando=!1;logear(){this.limpiarEspacios(),this.loginInvalido=!1,this.validando=!0;let o=this.formularioLogin.value,t=this.dbUsuarios.obtenerUsuarios().subscribe(a=>{t.unsubscribe(),this.validando=!1;for(let s of a)if(s.nombre==o.nombre&&s.password==o.password){s.password="",this.login.iniciar(s),this.dbUsuarios.generarLogUsuario(o),this.router.navigate(["/home"]);return}this.loginInvalido=!0})}limpiarEspacios(){this.formularioLogin.get("nombre")?.setValue(this.formularioLogin.get("nombre")?.value.trim()),this.formularioLogin.get("password")?.setValue(this.formularioLogin.get("password")?.value.trim())}completarLoginRapido(){this.formularioLogin.get("nombre")?.setValue("test@testing.com"),this.formularioLogin.get("password")?.setValue("roottestroottest")}static \u0275fac=function(t){return new(t||e)(u(E),u(M),u(A))};static \u0275cmp=d({type:e,selectors:[["app-login"]],standalone:!0,features:[g],decls:22,vars:6,consts:[[1,"login-form",3,"formGroup"],[1,"form-group"],["for","nombre"],["type","text","id","nombre","placeholder","Ingrese usuario","formControlName","nombre"],["class","error",4,"ngIf"],["for","password"],["type","password","id","password","placeholder","Ingrese contrase\xF1a","formControlName","password"],[1,"button-group"],[1,"login-button",3,"click","disabled"],["routerLink","/registro",1,"register-button"],[1,"login-button",3,"click"],[4,"ngIf"],[1,"error"]],template:function(t,a){if(t&1&&(i(0,"form",0)(1,"h2"),r(2,"Login"),n(),i(3,"div",1)(4,"label",2),r(5,"Usuario"),n(),m(6,"input",3),c(7,ze,2,0,"small",4),n(),i(8,"div",1)(9,"label",5),r(10,"Contrase\xF1a"),n(),m(11,"input",6),c(12,He,2,0,"small",4),n(),i(13,"div",7)(14,"button",8),x("click",function(){return a.logear()}),r(15,"Login"),n(),i(16,"button",9),r(17,"Registrarse"),n(),i(18,"button",10),x("click",function(){return a.completarLoginRapido()}),r(19,"Inicio Rapido"),n()(),c(20,qe,2,0,"strong",4)(21,Be,2,0,"strong",11),n()),t&2){let s,v;p("formGroup",a.formularioLogin),l(7),p("ngIf",((s=a.formularioLogin.get("nombre"))==null?null:s.touched)&&!((s=a.formularioLogin.get("nombre"))!=null&&s.valid)),l(5),p("ngIf",((v=a.formularioLogin.get("password"))==null?null:v.touched)&&!((v=a.formularioLogin.get("password"))!=null&&v.valid)),l(2),p("disabled",!a.formularioLogin.valid),l(6),p("ngIf",a.loginInvalido),l(),p("ngIf",a.validando)}},dependencies:[k,h,b,_,z,T,j,R,D,N,V],styles:["[_nghost-%COMP%]{display:flex;justify-content:center;align-items:stretch}.login-form[_ngcontent-%COMP%]{margin-top:20px;display:flex;flex-direction:column;align-items:center;background-color:#f8f8f8;padding:40px;border-radius:5px;box-shadow:0 0 10px #0003;margin-bottom:20px}.form-group[_ngcontent-%COMP%]{margin:10px 0}.button-group[_ngcontent-%COMP%]{margin-top:20px;display:flex;flex-direction:column;align-items:center}label[_ngcontent-%COMP%]{display:block;margin-bottom:5px;font-weight:700}input[_ngcontent-%COMP%]{padding:5px;border-radius:5px;border:1px solid #ccc;width:100%;max-width:300px}button[_ngcontent-%COMP%]{width:212px;margin:2px 25px;padding:10px;border:none;border-radius:5px;font-size:1rem;font-weight:700;cursor:pointer}.login-button[_ngcontent-%COMP%]{background-color:#007f00;color:#fff}.register-button[_ngcontent-%COMP%]{background-color:#005e00;color:#fff}.login-button[_ngcontent-%COMP%]:hover, .register-button[_ngcontent-%COMP%]:hover{background-color:#55b955}.login-button[_ngcontent-%COMP%]:disabled{background-color:#007f00;cursor:default}input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:red 1px solid}small[_ngcontent-%COMP%]{text-decoration:underline;display:block;width:212px}.error[_ngcontent-%COMP%]{color:red}"]})};var Q=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["app-quien-soy"]],standalone:!0,features:[g],decls:35,vars:0,consts:[[1,"about-me"],[1,"doble"],["src","../../../assets/foto.jpg","alt","foto"],["href","https://es.wikipedia.org/wiki/Buscaminas"]],template:function(t,a){t&1&&(i(0,"div",0)(1,"h2"),r(2,"Quien soy"),n(),i(3,"h3"),r(4,"Charotti Michelle M. "),n(),i(5,"p"),r(6,"Cursando la materia Lab IV."),n(),i(7,"p"),r(8,"Las cosas que hago en mis tiempos libres es viajar y recorrer pueblos no conocidos."),n(),i(9,"div",1),m(10,"img",2),i(11,"div")(12,"p")(13,"strong"),r(14,"Juego: "),n(),r(15,"Buscamina"),n(),i(16,"p")(17,"strong"),r(18,"Reglas: "),n()(),i(19,"p"),r(20,"Se debe despejar las casillas que no oculten una mina. "),n(),i(21,"p"),r(22,"Algunas casillas tienen un numero, el cual indica la cantidad de minas circundante."),n(),i(23,"p"),r(24,"Si una casilla tiene el n\xFAmero 3,significa que de las ocho casillas que hay alrededor"),n(),i(25,"p"),r(26," hay 3 con minas y 5 sin minas. "),n(),i(27,"p"),r(28,"Si se descubre una casilla sin n\xFAmero indica que ninguna de las casillas"),n(),i(29,"p"),r(30,"vecinas tiene mina y \xE9stas se descubren autom\xE1ticamente."),n(),i(31,"p"),r(32,"Al descubrir una casilla con una mina se pierde la partida."),n(),i(33,"a",3),r(34,"M\xE1s Informaci\xF3n"),n()()()())},dependencies:[h],styles:["[_nghost-%COMP%]{display:flex;justify-content:center;align-items:stretch}.about-me[_ngcontent-%COMP%]{margin-top:20px;display:flex;flex-direction:column;align-items:center;background-color:#f8f8f8;padding:20px;border-radius:5px;box-shadow:0 0 10px #0003;margin-bottom:20px}.about-me[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#005b4f;font-size:36px;font-weight:700;margin-bottom:10px}.about-me[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#005b4f;font-size:24px;margin-bottom:20px}.about-me[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:50vh;height:auto;margin:0 40px 20px;padding:5px;border-radius:50px;border:2px solid #ccc;width:100%;max-width:300px}.about-me[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#005b4f;font-size:18px;margin-bottom:20px}.doble[_ngcontent-%COMP%]{display:flex}"]})};function Ae(){return e=>{let o=e.get("password"),t=e.get("repetirPassword"),a={noCoincide:"La Contrase\xF1a No Coincide"};return o?.value!==t?.value?(e.get("repetirPassword")?.setErrors(a),a):(e.get("repetirPassword")?.setErrors(null),null)}}function De(e){return o=>{let t=o.value.toLowerCase();return e.obtenerUsuarios().pipe(ne(500),ie(1),oe(a=>{for(let s of a)if(s.nombre==t)return{usuarioExiste:"usuarioExiste"};return null}))}}function Ge(e,o){e&1&&(i(0,"small"),r(1," Debe Ingresar Un Email Valido "),n())}function Qe(e,o){e&1&&(i(0,"small"),r(1," Usuario Ya Registrado "),n())}function We(e,o){e&1&&(i(0,"small"),r(1," Al Menos 16 Caracteres "),n())}function Je(e,o){e&1&&(i(0,"small"),r(1," Debe Coincidir Con Contrase\xF1a "),n())}function Xe(e,o){e&1&&(i(0,"strong"),r(1," Verificando Disponibilidad de Usuario "),n())}function Ye(e,o){e&1&&(i(0,"strong"),r(1," Usuario Disponible "),n())}var W=class e{constructor(o,t,a){this.dbUsuarios=o;this.login=t;this.router=a;this.formularioRegistro=new U({nombre:new P("",[C.required,C.email],De(o)),password:new P("",[C.minLength(16),C.required]),repetirPassword:new P("",[C.minLength(16),C.required])},[Ae()])}formularioRegistro;generarUsuario(){this.limpiarEspacios();let o={nombre:this.formularioRegistro.value.nombre,password:this.formularioRegistro.value.password,puntajeMaxAhorcado:0,puntajeMaxMayorMenor:0,puntajeMaxPreguntados:0,puntajeMaxBuscamina:0};this.dbUsuarios.guardarUsuario(o),this.login.iniciar(o),this.dbUsuarios.generarLogUsuario(o),this.router.navigate(["/home"])}limpiarEspacios(){this.formularioRegistro.get("nombre")?.setValue(this.formularioRegistro.get("nombre")?.value.trim()),this.formularioRegistro.get("password")?.setValue(this.formularioRegistro.get("password")?.value.trim()),this.formularioRegistro.get("repetirPassword")?.setValue(this.formularioRegistro.get("repetirPassword")?.value.trim())}static \u0275fac=function(t){return new(t||e)(u(E),u(M),u(A))};static \u0275cmp=d({type:e,selectors:[["app-registro"]],standalone:!0,features:[g],decls:24,vars:8,consts:[[1,"login-form",3,"ngSubmit","formGroup"],[1,"form-group"],["for","nombre"],["type","text","id","nombre","placeholder","Ingrese email","formControlName","nombre"],[4,"ngIf"],["for","password"],["type","password","id","password","placeholder","Ingrese contrase\xF1a","formControlName","password"],["for","repetirPassword"],["type","password","id","repetirPassword","placeholder","Repita contrase\xF1a","formControlName","repetirPassword"],[1,"button-group"],["routerLink","/registro",1,"register-button",3,"disabled"]],template:function(t,a){if(t&1&&(i(0,"form",0),x("ngSubmit",function(){return a.generarUsuario()}),i(1,"h2"),r(2,"Registro"),n(),i(3,"div",1)(4,"label",2),r(5,"Email"),n(),m(6,"input",3),c(7,Ge,2,0,"small",4)(8,Qe,2,0,"small",4),n(),i(9,"div",1)(10,"label",5),r(11,"Contrase\xF1a"),n(),m(12,"input",6),c(13,We,2,0,"small",4),n(),i(14,"div",1)(15,"label",7),r(16,"Repetir Contrase\xF1a"),n(),m(17,"input",8),c(18,Je,2,0,"small",4),n(),i(19,"div",9)(20,"button",10),r(21,"Registrarse"),n()(),c(22,Xe,2,0,"strong",4)(23,Ye,2,0,"strong",4),n()),t&2){let s,v,F,$,ee,te;p("formGroup",a.formularioRegistro),l(7),p("ngIf",((s=a.formularioRegistro.get("nombre"))==null?null:s.touched)&&((s=a.formularioRegistro.get("nombre"))==null||s.errors==null?null:s.errors.email)),l(),p("ngIf",(v=a.formularioRegistro.get("nombre"))==null?null:v.getError("usuarioExiste")),l(5),p("ngIf",((F=a.formularioRegistro.get("password"))==null?null:F.touched)&&!((F=a.formularioRegistro.get("password"))!=null&&F.valid)),l(5),p("ngIf",(($=a.formularioRegistro.get("repetirPassword"))==null?null:$.touched)&&a.formularioRegistro.getError("noCoincide")),l(2),p("disabled",!a.formularioRegistro.valid),l(2),p("ngIf",(ee=a.formularioRegistro.get("nombre"))==null?null:ee.pending),l(),p("ngIf",(te=a.formularioRegistro.get("nombre"))==null?null:te.valid)}},dependencies:[b,_,z,T,j,R,D,N,V],styles:["[_nghost-%COMP%]{display:flex;justify-content:center;align-items:stretch}.login-form[_ngcontent-%COMP%]{margin-top:20px;display:flex;flex-direction:column;align-items:center;background-color:#f8f8f8;padding:40px;border-radius:5px;box-shadow:0 0 10px #0003;margin-bottom:20px}.form-group[_ngcontent-%COMP%]{margin:10px 0}.button-group[_ngcontent-%COMP%]{width:212px;margin-top:5px;display:flex;flex-direction:column;align-items:center}label[_ngcontent-%COMP%]{display:block;margin-bottom:5px;font-weight:700}input[_ngcontent-%COMP%]{display:block;padding:5px;border-radius:5px;border:1px solid #ccc;width:100%;width:212px}button[_ngcontent-%COMP%]{width:100%;margin:2px 0;padding:10px 0;border:none;border-radius:5px;font-size:1rem;font-weight:700;cursor:pointer}.register-button[_ngcontent-%COMP%]{background-color:#007f00;color:#fff}.register-button[_ngcontent-%COMP%]:hover{background-color:#55b955}.register-button[_ngcontent-%COMP%]:disabled{background-color:#007f00;cursor:default}input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:red 1px solid}small[_ngcontent-%COMP%]{text-decoration:underline;color:red;display:block;width:212px}"]})};var Ue=[{path:"",redirectTo:"/home",pathMatch:"full"},{path:"home",component:H},{path:"login",component:G},{path:"quien-soy",component:Q},{path:"registro",component:W},{path:"ahorcado",loadComponent:()=>import("./chunk-65A2GAHG.js").then(e=>e.AhorcadoComponent)},{path:"preguntados",loadComponent:()=>import("./chunk-NFCZBQ2I.js").then(e=>e.PreguntadosComponent)},{path:"mayor-menor",loadComponent:()=>import("./chunk-AEOOFPJZ.js").then(e=>e.MayorMenorComponent)},{path:"buscamina",loadComponent:()=>import("./chunk-7YEEXOGE.js").then(e=>e.BuscaminaComponent)},{path:"encuesta",loadComponent:()=>import("./chunk-WQ4I7RP5.js").then(e=>e.EncuestaComponent)}];var Te={providers:[ce({eventCoalescing:!0}),he(Ue),xe(()=>Ce(Ie)),ve(()=>_e()),ye(()=>Pe()),ge()]};function Ze(e,o){if(e&1&&(i(0,"strong"),r(1),n()),e&2){let t=f();l(),y("Bienvenido, ",t.usuario.nombre,"")}}function Ke(e,o){e&1&&(i(0,"button",10),r(1,"Login"),n())}function $e(e,o){e&1&&(i(0,"button",11),r(1,"Registro"),n())}function et(e,o){if(e&1){let t=L();i(0,"button",12),x("click",function(){w(t);let s=f();return S(s.cerrarSesion())}),r(1,"Cerrar Sesi\xF3n"),n()}}var J=class e{constructor(o){this.usuario=o}cerrarSesion(){this.usuario.cerrar()}static \u0275fac=function(t){return new(t||e)(u(M))};static \u0275cmp=d({type:e,selectors:[["app-header"]],standalone:!0,features:[g],decls:16,vars:4,consts:[[1,"left"],["src","../../../assets/iconogame.png","alt","i"],[1,"right"],[4,"ngIf"],["routerLink",""],["routerLink","quien-soy"],["routerLink","encuesta"],["routerLink","login",4,"ngIf"],["routerLink","registro",4,"ngIf"],[3,"click",4,"ngIf"],["routerLink","login"],["routerLink","registro"],[3,"click"]],template:function(t,a){t&1&&(i(0,"nav")(1,"div",0),m(2,"img",1),i(3,"h1"),r(4,"Sala de Juegos"),n()(),i(5,"div",2),c(6,Ze,2,1,"strong",3),i(7,"button",4),r(8,"Home"),n(),i(9,"button",5),r(10,"Quien Soy"),n(),i(11,"button",6),r(12,"Encuesta"),n(),c(13,Ke,2,0,"button",7)(14,$e,2,0,"button",8)(15,et,2,0,"button",9),n()()),t&2&&(l(6),p("ngIf",a.usuario.datos),l(7),p("ngIf",a.usuario.datos==null),l(),p("ngIf",a.usuario.datos==null),l(),p("ngIf",a.usuario.datos!=null))},dependencies:[k,h,b,_],styles:["nav[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;background-color:green;padding:10px;height:80px}.left[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;color:#fff;font-size:24px}.left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:50px}.right[_ngcontent-%COMP%]{display:flex;gap:10px}.right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#fff;border:none;color:green;padding:10px 20px;font-size:16px;border-radius:5px;min-width:125px;cursor:pointer}.right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#d3d3d3}strong[_ngcontent-%COMP%]{text-justify:auto;text-align:center;background-color:transparent;text-decoration:underline;color:#fff;margin-right:10px;padding:10px 20px;font-size:24px}@media (max-width: 1400px){strong[_ngcontent-%COMP%]{display:none}}"]})};var X=class e{constructor(o){this.firestore=o}guardarMensaje(o){let t=K(this.firestore,"mensajes");return Se(t,o)}obtenerMensajes(){let o=K(this.firestore,"mensajes"),t=Ee(o,ke("hora","desc"),Oe(100));return we(t)}static \u0275fac=function(t){return new(t||e)(ae(Me))};static \u0275prov=re({token:e,factory:e.\u0275fac,providedIn:"root"})};function ot(e,o){if(e&1&&(i(0,"li",10),r(1),n()),e&2){let t=o.$implicit,a=f(3);p("ngClass",t.autor==(a.usuario.datos==null?null:a.usuario.datos.nombre)?"enviado":"respuesta"),l(),se(a.formatearMensaje(t))}}function nt(e,o){if(e&1){let t=L();i(0,"div",3)(1,"div",4)(2,"button",5),x("click",function(){w(t);let s=f(2);return S(s.cerrarChat())}),r(3,"X"),n()(),i(4,"div",6)(5,"div")(6,"ul"),c(7,ot,2,2,"li",7),n()()(),i(8,"div")(9,"input",8),me("ngModelChange",function(s){w(t);let v=f(2);return pe(v.nuevoMensaje,s)||(v.nuevoMensaje=s),S(s)}),n(),i(10,"button",9),x("click",function(){w(t);let s=f(2);return S(s.enviarMensaje())}),r(11,">"),n()()()}if(e&2){let t=f(2);l(7),p("ngForOf",t.mensajes),l(2),le("ngModel",t.nuevoMensaje)}}function it(e,o){if(e&1){let t=L();i(0,"button",11),x("click",function(){w(t);let s=f(2);return S(s.abrirChat())}),m(1,"img",12),r(2,"Chat"),n()}}function rt(e,o){if(e&1&&(i(0,"div"),c(1,nt,12,2,"div",1)(2,it,3,0,"button",2),n()),e&2){let t=f();l(),p("ngIf",t.chatActivo),l(),p("ngIf",!t.chatActivo)}}var Y=class e{constructor(o,t){this.usuario=o;this.dbMensajes=t}chatActivo=!1;mensajes=[];nuevoMensaje="";observableMensajes;emisor=!1;get usuarioLogeado(){return this.usuario.datos!==void 0}ngDestroy(){this.observableMensajes&&this.observableMensajes.unsubscribe(),this.emisor=!1}abrirChat(){this.observableMensajes=this.dbMensajes.obtenerMensajes().subscribe(o=>{o=o.reverse(),this.mensajes=o}),this.chatActivo=!0,this.scrollChatAbajo()}scrollChatAbajo(){setTimeout(()=>{let o=document.getElementById("chat");o&&(o.scrollTop+=o.scrollHeight)},250)}cerrarChat(){this.chatActivo=!1}enviarMensaje(){if(this.scrollChatAbajo(),this.usuario.datos&&this.nuevoMensaje!=""){let o=new Date().toISOString();console.log(o);let t={autor:this.usuario.datos.nombre,hora:o,texto:this.nuevoMensaje};this.dbMensajes.guardarMensaje(t),this.nuevoMensaje="",this.emisor=!0}}formatearMensaje(o){let a=new Date(o.hora).toLocaleTimeString([],{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1}),s=o.autor.split("@")[0];return this.usuario.datos?.nombre!=o.autor?this.emisor=!1:this.emisor=!0,a+"| "+s+": "+o.texto}static \u0275fac=function(t){return new(t||e)(u(M),u(X))};static \u0275cmp=d({type:e,selectors:[["app-chat"]],standalone:!0,features:[g],decls:1,vars:1,consts:[[4,"ngIf"],["class","chat",4,"ngIf"],["class","abrir",3,"click",4,"ngIf"],[1,"chat"],[1,"cerrar"],[3,"click"],["id","chat",1,"chat-box"],[3,"ngClass",4,"ngFor","ngForOf"],["type","text","placeholder","Ingrese su mensaje...",3,"ngModelChange","ngModel"],[1,"enviar",3,"click"],[3,"ngClass"],[1,"abrir",3,"click"],["src","../../../assets/chat.png","alt",""]],template:function(t,a){t&1&&c(0,rt,3,2,"div",0),t&2&&p("ngIf",a.usuarioLogeado)},dependencies:[h,b,ue,de,_,Re,j,R,je],styles:["[_nghost-%COMP%]{position:fixed;bottom:0%;left:0%}img[_ngcontent-%COMP%]{width:50px}.chat[_ngcontent-%COMP%]{text-align:left;font-size:20px;font-weight:700;border:1px solid black;border-radius:10px;background-color:#d7ecd7;color:#fff;padding:5px;margin:3px}.abrir[_ngcontent-%COMP%]{text-align:left;font-size:20px;font-weight:700;min-width:120px;border:1px solid black;border-radius:10px;background-color:#32cd32;color:#fff;padding:5px;margin:3px}.cerrar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;right:0;text-align:left;font-size:20px;font-weight:700;border:1px solid black;border-radius:10px;background-color:#32cd32;color:#fff;padding:5px;margin:2px 7px}.enviar[_ngcontent-%COMP%]{position:absolute;right:0;text-align:left;font-size:20px;font-weight:700;border:1px solid black;border-radius:10px;background-color:#32cd32;color:#fff;padding:5px;margin:-5px 7px}input[_ngcontent-%COMP%]{width:calc(100% - 30px)}button[_ngcontent-%COMP%]:hover{background-color:#277927}.chat-box[_ngcontent-%COMP%]{color:#000;font-size:16px;font-weight:300;height:60vh;width:33vw;overflow-y:scroll;-ms-overflow-style:none;scrollbar-width:none}li[_ngcontent-%COMP%]{list-style:none;border-bottom:1px black solid}ul[_ngcontent-%COMP%]{padding:1px 5px}.chat-box[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.enviado[_ngcontent-%COMP%]{display:block;background-color:#6495ed;color:#fff}.respuestas[_ngcontent-%COMP%]{display:block;background-color:#d7ecd7;color:red}"]})};var Z=class e{title="tpsaladejuego1";static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["app-root"]],standalone:!0,features:[g],decls:3,vars:0,template:function(t,a){t&1&&m(0,"app-header")(1,"app-chat")(2,"router-outlet")},dependencies:[be,h,b,J,Y],styles:["[_nghost-%COMP%]{width:100%;height:100%}"]})};fe(Z,Te).catch(e=>console.error(e));
