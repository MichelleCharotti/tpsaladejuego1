import{a as E,b as M}from"./chunk-PKUTC4BC.js";import{a as Le}from"./chunk-QASMQ3KX.js";import{A as Ie,B as z,b as fe,c as be,d as he,e as U,f as k,g as xe,h,j,k as C,l as R,m as A,n as D,o as P,p as Re,q as T,u as N,v as V}from"./chunk-G7IQPZER.js";import{$a as pe,A as ne,Aa as u,C as ie,Eb as de,Fb as ge,Gb as v,Hb as b,Ka as c,Mb as Ce,Na as p,Nb as _e,Ob as ve,P as re,Pb as Me,Qa as i,Qb as ye,Ra as n,Rb as we,Sa as m,Sb as Se,Ta as L,Tb as Pe,U as ae,Ua as x,Ub as K,Va as f,Wb as Oe,Xa as r,Xb as ke,Ya as se,Yb as Ee,Z as d,Za as y,Zb as je,_a as le,ab as me,cb as g,eb as ce,fa as w,ga as S,mb as ue,q as oe,za as l}from"./chunk-Q72HHEJZ.js";function Ve(e,t){if(e&1&&(i(0,"div",10)(1,"h3"),r(2),n(),i(3,"strong"),r(4),n(),i(5,"strong"),r(6),n(),i(7,"strong"),r(8),n(),i(9,"strong"),r(10),n()()),e&2){let o=f();l(2),y("Puntaje de ",o.usuario.nombre,""),l(2),y("Ahorcado: ",o.usuario.datos.puntajeMaxAhorcado,""),l(2),y("Preguntados: ",o.usuario.datos.puntajeMaxPreguntados,""),l(2),y("Mayor > Menor: ",o.usuario.datos.puntajeMaxMayorMenor,""),l(2),y("Buscamina: ",o.usuario.datos.puntajeMaxBuscamina,"")}}var H=class e{constructor(t,o){this._usuario=t;this.db=o;this.obtenerTopAhorcado(),this.obtenerTopMayorMenor(),this.obtenerTopPreguntados(),this.obtenerTopBuscamina()}subscripcion=[];topAhorcado=[];topPreguntados=[];topMayorMenor=[];topBuscamina=[];ngOnDestroy(){if(this.subscripcion)for(let t of this.subscripcion)t.unsubscribe()}get usuario(){return this._usuario}obtenerTopAhorcado(){let t=this.db.obtenerTop("puntajeMaxAhorcado").subscribe(o=>{this.topAhorcado=o});this.subscripcion.push(t)}obtenerTopMayorMenor(){let t=this.db.obtenerTop("puntajeMaxMayorMenor").subscribe(o=>{this.topMayorMenor=o});this.subscripcion.push(t)}obtenerTopPreguntados(){let t=this.db.obtenerTop("puntajeMaxPreguntados").subscribe(o=>{this.topPreguntados=o});this.subscripcion.push(t)}obtenerTopBuscamina(){let t=this.db.obtenerTop("puntajeMaxBuscamina").subscribe(o=>{this.topBuscamina=o});this.subscripcion.push(t)}static \u0275fac=function(o){return new(o||e)(u(M),u(E))};static \u0275cmp=d({type:e,selectors:[["app-home"]],standalone:!0,features:[g],decls:18,vars:1,consts:[[1,"right"],["routerLink","/ahorcado"],["src","../../../assets/ahorcado.png","alt","img"],["routerLink","/preguntados"],["src","../../../assets/preguntados.png","alt","img"],["routerLink","/mayor-menor"],["src","../../../assets/mayoromenor.png","alt","img"],["routerLink","/buscamina"],["src","../../../assets/buscamina.png","alt","img"],["class","puntaje-personal left",4,"ngIf"],[1,"puntaje-personal","left"]],template:function(o,a){o&1&&(i(0,"div",0)(1,"button",1),m(2,"img",2),i(3,"p"),r(4,"Ahorcado"),n()(),i(5,"button",3),m(6,"img",4),i(7,"p"),r(8,"Preguntados"),n()(),i(9,"button",5),m(10,"img",6),i(11,"p"),r(12,"Mayor o Menor"),n()(),i(13,"button",7),m(14,"img",8),i(15,"p"),r(16,"Buscamina"),n()()(),c(17,Ve,11,5,"div",9)),o&2&&(l(17),p("ngIf",a.usuario.datos))},dependencies:[k,h,b,v],styles:["[_nghost-%COMP%]{display:flex;justify-content:center;align-items:stretch}p[_ngcontent-%COMP%]{text-decoration:none;margin:1px}.left[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;height:20vh}.right[_ngcontent-%COMP%]{display:flex;flex-direction:row;height:85vh;width:10vw;justify-content:center}ul[_ngcontent-%COMP%]{list-style:none}.izquierda[_ngcontent-%COMP%]{width:30px}.derecha[_ngcontent-%COMP%]{width:300px}.centro[_ngcontent-%COMP%]{width:50px}.right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:8vw;max-height:20vh}button[_ngcontent-%COMP%]{max-height:25vh;margin:200px 20px;padding:30px;background-color:#32cd32;justify-content:center;align-items:center;display:flex;flex-direction:column;border:1px solid black;border-radius:20px;transition:background-color .3s ease}button[_ngcontent-%COMP%]:hover{background-color:#36b036}button[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2vw;color:#fff;text-align:center;font-weight:700}.list[_ngcontent-%COMP%]{padding:1px;margin:10px;width:100%;text-align:center;border:1px solid black;border-radius:20px}.list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{width:100%;padding:5px 0;background-color:#32cd32;border:1px solid black;border-radius:20px}.lista-texto-izquierda[_ngcontent-%COMP%]{display:inline-block;width:5%;text-align:start;margin-right:5px}.lista-texto-centro[_ngcontent-%COMP%]{display:inline-block;width:85%;text-align:start}.lista-texto-derecha[_ngcontent-%COMP%]{margin:0 5px;display:inline-block;width:10%;text-align:end;background-color:#32cd32}li[_ngcontent-%COMP%]{font-size:20px;font-weight:600;width:100%;display:flex;border-bottom:1px solid #333}ul[_ngcontent-%COMP%]{width:100%}.puntaje-personal[_ngcontent-%COMP%]{border-radius:5px;margin-top:450px;padding:50px 60px;flex-direction:column;border:1px solid black;background-color:#f5f5f5}.puntaje-personal[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:28px;text-align:center;color:green;font-weight:700}.puntaje-personal[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;font-size:20px;font-weight:300}"]})};function He(e,t){e&1&&(i(0,"small",12),r(1," Debe Ingresar Un Usuario "),n())}function qe(e,t){e&1&&(i(0,"small",12),r(1," Al Menos 16 Caracteres "),n())}function Be(e,t){e&1&&(i(0,"strong",12),r(1," Usuario y/o Contrase\xF1a Invalidos "),n())}function Ge(e,t){e&1&&(i(0,"strong"),r(1," Validando Credenciales "),n())}var G=class e{constructor(t,o,a){this.dbUsuarios=t;this.login=o;this.router=a;this.formularioLogin=new D({nombre:new P("",[C.required]),password:new P("",[C.minLength(16),C.required])})}formularioLogin;loginInvalido=!1;validando=!1;logear(){this.limpiarEspacios(),this.loginInvalido=!1,this.validando=!0;let t=this.formularioLogin.value,o=this.dbUsuarios.obtenerUsuarios().subscribe(a=>{o.unsubscribe(),this.validando=!1;for(let s of a)if(s.nombre==t.nombre&&s.password==t.password){s.password="",this.login.iniciar(s),this.dbUsuarios.generarLogUsuario(t),this.router.navigate(["/home"]);return}this.loginInvalido=!0})}limpiarEspacios(){this.formularioLogin.get("nombre")?.setValue(this.formularioLogin.get("nombre")?.value.trim()),this.formularioLogin.get("password")?.setValue(this.formularioLogin.get("password")?.value.trim())}completarLoginRapido(){this.formularioLogin.get("nombre")?.setValue("test@testing.com"),this.formularioLogin.get("password")?.setValue("roottestroottest")}static \u0275fac=function(o){return new(o||e)(u(E),u(M),u(U))};static \u0275cmp=d({type:e,selectors:[["app-login"]],standalone:!0,features:[g],decls:22,vars:6,consts:[[1,"login-form",3,"formGroup"],[1,"form-group"],["for","nombre"],["type","text","id","nombre","placeholder","Ingrese usuario","formControlName","nombre"],["class","error",4,"ngIf"],["for","password"],["type","password","id","password","placeholder","Ingrese contrase\xF1a","formControlName","password"],[1,"button-group"],[1,"login-button",3,"click","disabled"],["routerLink","/registro",1,"register-button"],[1,"login-button",3,"click"],[4,"ngIf"],[1,"error"]],template:function(o,a){if(o&1&&(i(0,"form",0)(1,"h2"),r(2,"Login"),n(),i(3,"div",1)(4,"label",2),r(5,"Usuario"),n(),m(6,"input",3),c(7,He,2,0,"small",4),n(),i(8,"div",1)(9,"label",5),r(10,"Contrase\xF1a"),n(),m(11,"input",6),c(12,qe,2,0,"small",4),n(),i(13,"div",7)(14,"button",8),x("click",function(){return a.logear()}),r(15,"Login"),n(),i(16,"button",9),r(17,"Registrarse"),n(),i(18,"button",10),x("click",function(){return a.completarLoginRapido()}),r(19,"Inicio Rapido"),n()(),c(20,Be,2,0,"strong",4)(21,Ge,2,0,"strong",11),n()),o&2){let s,_;p("formGroup",a.formularioLogin),l(7),p("ngIf",((s=a.formularioLogin.get("nombre"))==null?null:s.touched)&&!((s=a.formularioLogin.get("nombre"))!=null&&s.valid)),l(5),p("ngIf",((_=a.formularioLogin.get("password"))==null?null:_.touched)&&!((_=a.formularioLogin.get("password"))!=null&&_.valid)),l(2),p("disabled",!a.formularioLogin.valid),l(6),p("ngIf",a.loginInvalido),l(),p("ngIf",a.validando)}},dependencies:[k,h,b,v,z,T,j,R,A,N,V],styles:["[_nghost-%COMP%]{display:flex;justify-content:center;align-items:stretch}.login-form[_ngcontent-%COMP%]{margin-top:20px;display:flex;flex-direction:column;align-items:center;background-color:#f8f8f8;padding:40px;border-radius:5px;box-shadow:0 0 10px #0003;margin-bottom:20px}.form-group[_ngcontent-%COMP%]{margin:10px 0}.button-group[_ngcontent-%COMP%]{margin-top:20px;display:flex;flex-direction:column;align-items:center}label[_ngcontent-%COMP%]{display:block;margin-bottom:5px;font-weight:700}input[_ngcontent-%COMP%]{padding:5px;border-radius:5px;border:1px solid #ccc;width:100%;max-width:300px}button[_ngcontent-%COMP%]{width:212px;margin:2px 25px;padding:10px;border:none;border-radius:5px;font-size:1rem;font-weight:700;cursor:pointer}.login-button[_ngcontent-%COMP%]{background-color:#007f00;color:#fff}.register-button[_ngcontent-%COMP%]{background-color:#005e00;color:#fff}.login-button[_ngcontent-%COMP%]:hover, .register-button[_ngcontent-%COMP%]:hover{background-color:#55b955}.login-button[_ngcontent-%COMP%]:disabled{background-color:#007f00;cursor:default}input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:red 1px solid}small[_ngcontent-%COMP%]{text-decoration:underline;display:block;width:212px}.error[_ngcontent-%COMP%]{color:red}"]})};var Q=class e{static \u0275fac=function(o){return new(o||e)};static \u0275cmp=d({type:e,selectors:[["app-quien-soy"]],standalone:!0,features:[g],decls:35,vars:0,consts:[[1,"about-me"],[1,"doble"],["src","../../../assets/foto.jpg","alt","foto"],["href","https://es.wikipedia.org/wiki/Buscaminas"]],template:function(o,a){o&1&&(i(0,"div",0)(1,"h2"),r(2,"Quien soy"),n(),i(3,"h3"),r(4,"Charotti Michelle M. "),n(),i(5,"p"),r(6,"Cursando la materia Lab IV."),n(),i(7,"p"),r(8,"Las cosas que hago en mis tiempos libres es viajar y recorrer pueblos no conocidos."),n(),i(9,"div",1),m(10,"img",2),i(11,"div")(12,"p")(13,"strong"),r(14,"Juego: "),n(),r(15,"Buscamina"),n(),i(16,"p")(17,"strong"),r(18,"Reglas: "),n()(),i(19,"p"),r(20,"Se debe despejar las casillas que no oculten una mina. "),n(),i(21,"p"),r(22,"Algunas casillas tienen un numero, el cual indica la cantidad de minas circundante."),n(),i(23,"p"),r(24,"Si una casilla tiene el n\xFAmero 3,significa que de las ocho casillas que hay alrededor"),n(),i(25,"p"),r(26," hay 3 con minas y 5 sin minas. "),n(),i(27,"p"),r(28,"Si se descubre una casilla sin n\xFAmero indica que ninguna de las casillas"),n(),i(29,"p"),r(30,"vecinas tiene mina y \xE9stas se descubren autom\xE1ticamente."),n(),i(31,"p"),r(32,"Al descubrir una casilla con una mina se pierde la partida."),n(),i(33,"a",3),r(34,"M\xE1s Informaci\xF3n"),n()()()())},dependencies:[h],styles:["[_nghost-%COMP%]{display:flex;justify-content:center;align-items:stretch}.about-me[_ngcontent-%COMP%]{margin-top:20px;display:flex;flex-direction:column;align-items:center;background-color:#f8f8f8;padding:20px;border-radius:5px;box-shadow:0 0 10px #0003;margin-bottom:20px}.about-me[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#005b4f;font-size:36px;font-weight:700;margin-bottom:10px}.about-me[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#005b4f;font-size:24px;margin-bottom:20px}.about-me[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:50vh;height:auto;margin:0 40px 20px;padding:5px;border-radius:50px;border:2px solid #ccc;width:100%;max-width:300px}.about-me[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#005b4f;font-size:18px;margin-bottom:20px}.doble[_ngcontent-%COMP%]{display:flex}"]})};function Ae(){return e=>{let t=e.get("password"),o=e.get("repetirPassword"),a={noCoincide:"La Contrase\xF1a No Coincide"};return t?.value!==o?.value?(e.get("repetirPassword")?.setErrors(a),a):(e.get("repetirPassword")?.setErrors(null),null)}}function De(e){return t=>{let o=t.value.toLowerCase();return e.obtenerUsuarios().pipe(ne(500),ie(1),oe(a=>{for(let s of a)if(s.nombre==o)return{usuarioExiste:"usuarioExiste"};return null}))}}function Qe(e,t){e&1&&(i(0,"small"),r(1," Debe Ingresar Un Email Valido "),n())}function We(e,t){e&1&&(i(0,"small"),r(1," Usuario Ya Registrado "),n())}function Je(e,t){e&1&&(i(0,"small"),r(1," Al Menos 16 Caracteres "),n())}function Xe(e,t){e&1&&(i(0,"small"),r(1," Debe Coincidir Con Contrase\xF1a "),n())}function Ye(e,t){e&1&&(i(0,"strong"),r(1," Verificando Disponibilidad de Usuario "),n())}function Ze(e,t){e&1&&(i(0,"strong"),r(1," Usuario Disponible "),n())}var W=class e{constructor(t,o,a){this.dbUsuarios=t;this.login=o;this.router=a;this.formularioRegistro=new D({nombre:new P("",[C.required,C.email],De(t)),password:new P("",[C.minLength(16),C.required]),repetirPassword:new P("",[C.minLength(16),C.required])},[Ae()])}formularioRegistro;generarUsuario(){this.limpiarEspacios();let t={nombre:this.formularioRegistro.value.nombre,password:this.formularioRegistro.value.password,puntajeMaxAhorcado:0,puntajeMaxMayorMenor:0,puntajeMaxPreguntados:0,puntajeMaxBuscamina:0};this.dbUsuarios.guardarUsuario(t),this.login.iniciar(t),this.dbUsuarios.generarLogUsuario(t),this.router.navigate(["/home"])}limpiarEspacios(){this.formularioRegistro.get("nombre")?.setValue(this.formularioRegistro.get("nombre")?.value.trim()),this.formularioRegistro.get("password")?.setValue(this.formularioRegistro.get("password")?.value.trim()),this.formularioRegistro.get("repetirPassword")?.setValue(this.formularioRegistro.get("repetirPassword")?.value.trim())}static \u0275fac=function(o){return new(o||e)(u(E),u(M),u(U))};static \u0275cmp=d({type:e,selectors:[["app-registro"]],standalone:!0,features:[g],decls:24,vars:8,consts:[[1,"login-form",3,"ngSubmit","formGroup"],[1,"form-group"],["for","nombre"],["type","text","id","nombre","placeholder","Ingrese email","formControlName","nombre"],[4,"ngIf"],["for","password"],["type","password","id","password","placeholder","Ingrese contrase\xF1a","formControlName","password"],["for","repetirPassword"],["type","password","id","repetirPassword","placeholder","Repita contrase\xF1a","formControlName","repetirPassword"],[1,"button-group"],["routerLink","/registro",1,"register-button",3,"disabled"]],template:function(o,a){if(o&1&&(i(0,"form",0),x("ngSubmit",function(){return a.generarUsuario()}),i(1,"h2"),r(2,"Registro"),n(),i(3,"div",1)(4,"label",2),r(5,"Email"),n(),m(6,"input",3),c(7,Qe,2,0,"small",4)(8,We,2,0,"small",4),n(),i(9,"div",1)(10,"label",5),r(11,"Contrase\xF1a"),n(),m(12,"input",6),c(13,Je,2,0,"small",4),n(),i(14,"div",1)(15,"label",7),r(16,"Repetir Contrase\xF1a"),n(),m(17,"input",8),c(18,Xe,2,0,"small",4),n(),i(19,"div",9)(20,"button",10),r(21,"Registrarse"),n()(),c(22,Ye,2,0,"strong",4)(23,Ze,2,0,"strong",4),n()),o&2){let s,_,F,$,ee,te;p("formGroup",a.formularioRegistro),l(7),p("ngIf",((s=a.formularioRegistro.get("nombre"))==null?null:s.touched)&&((s=a.formularioRegistro.get("nombre"))==null||s.errors==null?null:s.errors.email)),l(),p("ngIf",(_=a.formularioRegistro.get("nombre"))==null?null:_.getError("usuarioExiste")),l(5),p("ngIf",((F=a.formularioRegistro.get("password"))==null?null:F.touched)&&!((F=a.formularioRegistro.get("password"))!=null&&F.valid)),l(5),p("ngIf",(($=a.formularioRegistro.get("repetirPassword"))==null?null:$.touched)&&a.formularioRegistro.getError("noCoincide")),l(2),p("disabled",!a.formularioRegistro.valid),l(2),p("ngIf",(ee=a.formularioRegistro.get("nombre"))==null?null:ee.pending),l(),p("ngIf",(te=a.formularioRegistro.get("nombre"))==null?null:te.valid)}},dependencies:[b,v,z,T,j,R,A,N,V],styles:["[_nghost-%COMP%]{display:flex;justify-content:center;align-items:stretch}.login-form[_ngcontent-%COMP%]{margin-top:20px;display:flex;flex-direction:column;align-items:center;background-color:#f8f8f8;padding:40px;border-radius:5px;box-shadow:0 0 10px #0003;margin-bottom:20px}.form-group[_ngcontent-%COMP%]{margin:10px 0}.button-group[_ngcontent-%COMP%]{width:212px;margin-top:5px;display:flex;flex-direction:column;align-items:center}label[_ngcontent-%COMP%]{display:block;margin-bottom:5px;font-weight:700}input[_ngcontent-%COMP%]{display:block;padding:5px;border-radius:5px;border:1px solid #ccc;width:100%;width:212px}button[_ngcontent-%COMP%]{width:100%;margin:2px 0;padding:10px 0;border:none;border-radius:5px;font-size:1rem;font-weight:700;cursor:pointer}.register-button[_ngcontent-%COMP%]{background-color:#007f00;color:#fff}.register-button[_ngcontent-%COMP%]:hover{background-color:#55b955}.register-button[_ngcontent-%COMP%]:disabled{background-color:#007f00;cursor:default}input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:red 1px solid}small[_ngcontent-%COMP%]{text-decoration:underline;color:red;display:block;width:212px}"]})};var Te=[{path:"",redirectTo:"/home",pathMatch:"full"},{path:"home",component:H},{path:"login",component:G},{path:"quien-soy",component:Q},{path:"registro",component:W},{path:"ahorcado",loadComponent:()=>import("./chunk-65A2GAHG.js").then(e=>e.AhorcadoComponent)},{path:"preguntados",loadComponent:()=>import("./chunk-NFCZBQ2I.js").then(e=>e.PreguntadosComponent)},{path:"mayor-menor",loadComponent:()=>import("./chunk-AEOOFPJZ.js").then(e=>e.MayorMenorComponent)},{path:"buscamina",loadComponent:()=>import("./chunk-7YEEXOGE.js").then(e=>e.BuscaminaComponent)},{path:"encuesta",loadComponent:()=>import("./chunk-CGTOV2NJ.js").then(e=>e.EncuestaComponent)}];var Ne={providers:[ue({eventCoalescing:!0}),xe(Te),Ce(()=>_e(Le)),ve(()=>Me()),we(()=>Oe()),fe()]};function Ke(e,t){if(e&1&&(i(0,"strong"),r(1),n()),e&2){let o=f();l(),y("Bienvenido, ",o.usuario.nombre,"")}}function $e(e,t){e&1&&(i(0,"button",10),r(1,"Login"),n())}function et(e,t){e&1&&(i(0,"button",11),r(1,"Registro"),n())}function tt(e,t){if(e&1){let o=L();i(0,"button",12),x("click",function(){w(o);let s=f();return S(s.cerrarSesion())}),r(1,"Cerrar Sesi\xF3n"),n()}}var J=class e{constructor(t){this.usuario=t}cerrarSesion(){this.usuario.cerrar()}static \u0275fac=function(o){return new(o||e)(u(M))};static \u0275cmp=d({type:e,selectors:[["app-header"]],standalone:!0,features:[g],decls:16,vars:4,consts:[[1,"left"],["src","../../../assets/iconogame.png","alt","i"],[1,"right"],[4,"ngIf"],["routerLink",""],["routerLink","quien-soy"],["routerLink","encuesta"],["routerLink","login",4,"ngIf"],["routerLink","registro",4,"ngIf"],[3,"click",4,"ngIf"],["routerLink","login"],["routerLink","registro"],[3,"click"]],template:function(o,a){o&1&&(i(0,"nav")(1,"div",0),m(2,"img",1),i(3,"h1"),r(4,"Sala de Juegos"),n()(),i(5,"div",2),c(6,Ke,2,1,"strong",3),i(7,"button",4),r(8,"Home"),n(),i(9,"button",5),r(10,"Quien Soy"),n(),i(11,"button",6),r(12,"Encuesta"),n(),c(13,$e,2,0,"button",7)(14,et,2,0,"button",8)(15,tt,2,0,"button",9),n()()),o&2&&(l(6),p("ngIf",a.usuario.datos),l(7),p("ngIf",a.usuario.datos==null),l(),p("ngIf",a.usuario.datos==null),l(),p("ngIf",a.usuario.datos!=null))},dependencies:[k,h,b,v],styles:["nav[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;background-color:green;padding:10px;height:80px}.left[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;color:#fff;font-size:24px}.left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:50px}.right[_ngcontent-%COMP%]{display:flex;gap:10px}.right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#fff;border:none;color:green;padding:10px 20px;font-size:16px;border-radius:5px;min-width:125px;cursor:pointer}.right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#d3d3d3}strong[_ngcontent-%COMP%]{text-justify:auto;text-align:center;background-color:transparent;text-decoration:underline;color:#fff;margin-right:10px;padding:10px 20px;font-size:24px}@media (max-width: 1400px){strong[_ngcontent-%COMP%]{display:none}}"]})};var X=class e{constructor(t){this.firestore=t}guardarMensaje(t){let o=K(this.firestore,"mensajes");return Pe(o,t)}obtenerMensajes(){let t=K(this.firestore,"mensajes"),o=je(t,Ee("hora","desc"),ke(100));return Se(o)}static \u0275fac=function(o){return new(o||e)(ae(ye))};static \u0275prov=re({token:e,factory:e.\u0275fac,providedIn:"root"})};var nt=e=>({enviado:e});function it(e,t){if(e&1&&(i(0,"li",10),r(1),n()),e&2){let o=t.$implicit,a=f(3);p("ngClass",ce(2,nt,a.emisor)),l(),se(a.formatearMensaje(o))}}function rt(e,t){if(e&1){let o=L();i(0,"div",3)(1,"div",4)(2,"button",5),x("click",function(){w(o);let s=f(2);return S(s.cerrarChat())}),r(3,"X"),n()(),i(4,"div",6)(5,"div")(6,"ul"),c(7,it,2,4,"li",7),n()()(),i(8,"div")(9,"input",8),me("ngModelChange",function(s){w(o);let _=f(2);return pe(_.nuevoMensaje,s)||(_.nuevoMensaje=s),S(s)}),n(),i(10,"button",9),x("click",function(){w(o);let s=f(2);return S(s.enviarMensaje())}),r(11,">"),n()()()}if(e&2){let o=f(2);l(7),p("ngForOf",o.mensajes),l(2),le("ngModel",o.nuevoMensaje)}}function at(e,t){if(e&1){let o=L();i(0,"button",11),x("click",function(){w(o);let s=f(2);return S(s.abrirChat())}),m(1,"img",12),r(2,"Chat"),n()}}function st(e,t){if(e&1&&(i(0,"div"),c(1,rt,12,2,"div",1)(2,at,3,0,"button",2),n()),e&2){let o=f();l(),p("ngIf",o.chatActivo),l(),p("ngIf",!o.chatActivo)}}var Y=class e{constructor(t,o){this.usuario=t;this.dbMensajes=o}chatActivo=!1;mensajes=[];nuevoMensaje="";observableMensajes;get usuarioLogeado(){return this.usuario.datos!==void 0}ngDestroy(){this.observableMensajes&&this.observableMensajes.unsubscribe()}emisor=!1;abrirChat(){this.observableMensajes=this.dbMensajes.obtenerMensajes().subscribe(t=>{t=t.reverse(),this.mensajes=t}),this.chatActivo=!0,this.scrollChatAbajo()}scrollChatAbajo(){setTimeout(()=>{let t=document.getElementById("chat");t&&(t.scrollTop+=t.scrollHeight)},250)}cerrarChat(){this.chatActivo=!1}enviarMensaje(){if(this.scrollChatAbajo(),this.usuario.datos&&this.nuevoMensaje!=""){let t=new Date().toISOString();console.log(t);let o={autor:this.usuario.datos.nombre,hora:t,texto:this.nuevoMensaje};this.dbMensajes.guardarMensaje(o),this.nuevoMensaje=""}}formatearMensaje(t){let a=new Date(t.hora).toLocaleTimeString([],{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1}),s=t.autor.split("@")[0];return this.usuario.datos?.nombre==t.autor?this.emisor=!0:this.emisor=!1,a+"| "+s+": "+t.texto}static \u0275fac=function(o){return new(o||e)(u(M),u(X))};static \u0275cmp=d({type:e,selectors:[["app-chat"]],standalone:!0,features:[g],decls:1,vars:1,consts:[[4,"ngIf"],["class","chat",4,"ngIf"],["class","abrir",3,"click",4,"ngIf"],[1,"chat"],[1,"cerrar"],[3,"click"],["id","chat",1,"chat-box"],[3,"ngClass",4,"ngFor","ngForOf"],["type","text","placeholder","Ingrese su mensaje...",3,"ngModelChange","ngModel"],[1,"enviar",3,"click"],[3,"ngClass"],[1,"abrir",3,"click"],["src","../../../assets/chat.png","alt",""]],template:function(o,a){o&1&&c(0,st,3,2,"div",0),o&2&&p("ngIf",a.usuarioLogeado)},dependencies:[h,b,de,ge,v,Ie,j,R,Re],styles:["[_nghost-%COMP%]{position:fixed;bottom:0%;left:0%}img[_ngcontent-%COMP%]{width:50px}.chat[_ngcontent-%COMP%]{text-align:left;font-size:20px;font-weight:700;border:1px solid black;border-radius:10px;background-color:#d7ecd7;color:#fff;padding:5px;margin:3px}.abrir[_ngcontent-%COMP%]{text-align:left;font-size:20px;font-weight:700;min-width:120px;border:1px solid black;border-radius:10px;background-color:#32cd32;color:#fff;padding:5px;margin:3px}.cerrar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;right:0;text-align:left;font-size:20px;font-weight:700;border:1px solid black;border-radius:10px;background-color:#32cd32;color:#fff;padding:5px;margin:2px 7px}.enviar[_ngcontent-%COMP%]{position:absolute;right:0;text-align:left;font-size:20px;font-weight:700;border:1px solid black;border-radius:10px;background-color:#32cd32;color:#fff;padding:5px;margin:-5px 7px}input[_ngcontent-%COMP%]{width:calc(100% - 30px)}button[_ngcontent-%COMP%]:hover{background-color:#277927}.chat-box[_ngcontent-%COMP%]{color:#000;font-size:16px;font-weight:300;height:60vh;width:33vw;overflow-y:scroll;-ms-overflow-style:none;scrollbar-width:none}li[_ngcontent-%COMP%]{list-style:none;border-bottom:1px black solid}.emisor[_ngcontent-%COMP%]{font-style:green;font-weight:700}ul[_ngcontent-%COMP%]{padding:1px 5px}.chat-box[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.enviado[_ngcontent-%COMP%]{display:block;background-color:#6495ed;color:#fff}.recibido[_ngcontent-%COMP%]{display:block;background-color:#dc143c;color:#fff}"]})};var Z=class e{title="tpsaladejuego1";static \u0275fac=function(o){return new(o||e)};static \u0275cmp=d({type:e,selectors:[["app-root"]],standalone:!0,features:[g],decls:3,vars:0,template:function(o,a){o&1&&m(0,"app-header")(1,"app-chat")(2,"router-outlet")},dependencies:[he,h,b,J,Y],styles:["[_nghost-%COMP%]{width:100%;height:100%}"]})};be(Z,Ne).catch(e=>console.error(e));
