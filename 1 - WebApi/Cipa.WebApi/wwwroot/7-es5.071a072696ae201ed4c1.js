(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{sTdy:function(t,e,n){"use strict";n.r(e);var a=n("TYT/"),o=n("Valr"),r=n("DUip"),i=n("F/XL"),c=n("9Z1F"),s=n("u4FB"),l=function(){function t(t,e){this.api=t,this.router=e}return t.prototype.resolve=function(t,e){var n=this;if(t.paramMap.has("id")){var a=+t.paramMap.get("id");return this.api.get(a).pipe(Object(c.a)((function(t){return n.router.navigate(["/not-found"]),Object(i.a)(null)})))}this.router.navigate(["/not-found"])},t.\u0275fac=function(e){return new(e||t)(a["\u0275\u0275inject"](s.a),a["\u0275\u0275inject"](r.d))},t.\u0275prov=a["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac,providedIn:"root"}),t}(),u=n("mrSG"),d=n("ZE6C"),p=n("AytR"),m=n("RXgp"),f=n("t9fZ"),v=n("cUzu"),g=function(t){function e(e){var n=t.call(this,e,p.a.api+m.a.contas)||this;return n.http=e,n}return Object(u.__extends)(e,t),e.prototype.getList=function(){return this.http.get(this.url+"list").pipe(Object(f.a)(1))},e.prototype.getContaUsuario=function(){return this.http.get(""+this.url).pipe(Object(f.a)(1))},e.prototype.getCronogramaPadrao=function(){return this.http.get(this.url+"cronograma").pipe(Object(f.a)(1))},e.prototype.postEtapaCronogramaPadrao=function(t){return this.http.post(this.url+"cronograma",t).pipe(Object(f.a)(1))},e.prototype.putEtapaCronogramaPadrao=function(t){return this.http.put(this.url+"cronograma/"+t.id,t).pipe(Object(f.a)(1))},e.prototype.deleteEtapaCronogramaPadrao=function(t){return this.http.delete(this.url+"cronograma/"+t).pipe(Object(f.a)(1))},e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275inject"](v.b))},e.\u0275prov=a["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(d.a),h=function(){function t(t,e){this.api=t,this.router=e}return t.prototype.resolve=function(t,e){var n=this;return this.api.getContaUsuario().pipe(Object(c.a)((function(t){return n.router.navigate(["/not-found"]),Object(i.a)(null)})))},t.\u0275fac=function(e){return new(e||t)(a["\u0275\u0275inject"](g),a["\u0275\u0275inject"](r.d))},t.\u0275prov=a["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac,providedIn:"root"}),t}(),b=n("7dP1"),E=n("iufN"),y=n("dWir"),x=n("gbzl"),C=function(){function t(t,e,n){this.authService=t,this.router=e,this.toast=n}return t.prototype.canActivate=function(){return!(!this.authService.tokenValido||this.authService.authInfo.perfil!==E.a.Administrador)||(this.toast.showMessage({message:"Usu\xe1rio sem permiss\xe3o de acesso",title:"Sem permiss\xe3o",type:x.a.warning}),this.router.navigate(["/eleicoes"]),!1)},t.\u0275fac=function(e){return new(e||t)(a["\u0275\u0275inject"](b.a),a["\u0275\u0275inject"](r.d),a["\u0275\u0275inject"](y.a))},t.\u0275prov=a["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac,providedIn:"root"}),t}(),S=function(){function t(t,e){this.api=t,this.router=e}return t.prototype.resolve=function(t,e){var n=this;return this.api.getList().pipe(Object(c.a)((function(t){return n.router.navigate(["/not-found"]),Object(i.a)(null)})))},t.\u0275fac=function(e){return new(e||t)(a["\u0275\u0275inject"](g),a["\u0275\u0275inject"](r.d))},t.\u0275prov=a["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac,providedIn:"root"}),t}(),O=n("VnD/"),j=n("67Y/"),I=n("xMyE"),w=n("15JJ"),M=n("UdTj"),P=n("IEi8"),A=function(){function t(){}return t.prototype.ngOnInit=function(){},Object.defineProperty(t.prototype,"statusContaClass",{get:function(){return this.conta.ativa?"label-primary":"label-danger"},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"statusConta",{get:function(){return this.conta.ativa?"Ativa":"Inativa"},enumerable:!0,configurable:!0}),t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a["\u0275\u0275defineComponent"]({type:t,selectors:[["app-conta-info"]],inputs:{conta:"conta"},decls:30,vars:11,consts:[[1,"row"],[1,"col-lg-12"],[1,"dl-horizontal"],["id","status",1,"label",3,"ngClass"],[1,"row","m-t-sm"],[1,"col-lg-4","col-md-6","col-sm-12"],["ajuda","Quantidade m\xe1xima de estabelecimentos que podem ser cadastrados para essa conta."]],template:function(t,e){1&t&&(a["\u0275\u0275elementStart"](0,"div",0),a["\u0275\u0275elementStart"](1,"div",1),a["\u0275\u0275elementStart"](2,"dl",2),a["\u0275\u0275elementStart"](3,"dt"),a["\u0275\u0275text"](4,"Status:"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](5,"dd"),a["\u0275\u0275elementStart"](6,"span",3),a["\u0275\u0275text"](7),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](8,"div",4),a["\u0275\u0275elementStart"](9,"div",5),a["\u0275\u0275elementStart"](10,"dl",2),a["\u0275\u0275elementStart"](11,"dt"),a["\u0275\u0275text"](12,"Data in\xedcio:"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](13,"dd"),a["\u0275\u0275text"](14),a["\u0275\u0275pipe"](15,"date"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](16,"div",5),a["\u0275\u0275elementStart"](17,"dl",2),a["\u0275\u0275elementStart"](18,"dt"),a["\u0275\u0275text"](19,"Data Fim:"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](20,"dd"),a["\u0275\u0275text"](21),a["\u0275\u0275pipe"](22,"date"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](23,"div",5),a["\u0275\u0275elementStart"](24,"dl",2),a["\u0275\u0275elementStart"](25,"dt"),a["\u0275\u0275text"](26," Qtda. Estabelecimentos "),a["\u0275\u0275element"](27,"app-ajuda-tooltip",6),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](28,"dd"),a["\u0275\u0275text"](29),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&t&&(a["\u0275\u0275advance"](6),a["\u0275\u0275property"]("ngClass",e.statusContaClass),a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate"](e.statusConta),a["\u0275\u0275advance"](7),a["\u0275\u0275textInterpolate"](a["\u0275\u0275pipeBind2"](15,5,e.conta.dataInicio,"dd/MM/yyyy")),a["\u0275\u0275advance"](7),a["\u0275\u0275textInterpolate"](a["\u0275\u0275pipeBind2"](22,8,e.conta.dataFim,"dd/MM/yyyy")),a["\u0275\u0275advance"](8),a["\u0275\u0275textInterpolate"](e.conta.qtdaEstabelecimentos))},directives:[o.k,P.a],pipes:[o.e],styles:[""]}),t}();function k(t,e){if(1&t){var n=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"button",7),a["\u0275\u0275listener"]("click",(function(){a["\u0275\u0275restoreView"](n);var t=a["\u0275\u0275nextContext"]().$implicit;return a["\u0275\u0275nextContext"]().exclui(t)})),a["\u0275\u0275element"](1,"i",8),a["\u0275\u0275elementEnd"]()}}function _(t,e){if(1&t){var n=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"tr"),a["\u0275\u0275elementStart"](1,"td"),a["\u0275\u0275text"](2),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](3,"td"),a["\u0275\u0275text"](4),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](5,"td"),a["\u0275\u0275text"](6),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](7,"td",2),a["\u0275\u0275elementStart"](8,"div"),a["\u0275\u0275elementStart"](9,"a",4),a["\u0275\u0275listener"]("click",(function(){a["\u0275\u0275restoreView"](n);var t=e.$implicit;return a["\u0275\u0275nextContext"]().editarUsuario(t)})),a["\u0275\u0275element"](10,"i",5),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](11,k,2,0,"button",6),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()}if(2&t){var o=e.$implicit,r=a["\u0275\u0275nextContext"]();a["\u0275\u0275advance"](2),a["\u0275\u0275textInterpolate"](o.email),a["\u0275\u0275advance"](2),a["\u0275\u0275textInterpolate"](o.nome),a["\u0275\u0275advance"](2),a["\u0275\u0275textInterpolate"](o.cargo),a["\u0275\u0275advance"](5),a["\u0275\u0275property"]("ngIf",r.permitirExclusao)}}var U=function(){function t(t){this.toast=t,this.permitirExclusao=!0,this.excluir=new a.EventEmitter,this.editar=new a.EventEmitter}return t.prototype.ngOnInit=function(){},t.prototype.exclui=function(t){var e=this;this.toast.confirmModal("Deseja mesmo excluir esse usu\xe1rio? Essa a\xe7\xe3o n\xe3o poder\xe1 ser defeita.","Confirma\xe7\xe3o").pipe(Object(O.a)((function(t){return t})),Object(I.a)((function(n){return e.excluir.emit(t)}))).subscribe()},t.prototype.editarUsuario=function(t){this.editar.emit(t)},t.\u0275fac=function(e){return new(e||t)(a["\u0275\u0275directiveInject"](y.a))},t.\u0275cmp=a["\u0275\u0275defineComponent"]({type:t,selectors:[["app-usuarios-lista"]],inputs:{usuarios:"usuarios",permitirExclusao:"permitirExclusao"},outputs:{excluir:"excluir",editar:"editar"},decls:13,vars:1,consts:[[1,"table-responsive"],[1,"table","table-striped"],[1,"text-right"],[4,"ngFor","ngForOf"],[1,"btn","btn-xs","btn-outline","btn-success","m-r-xs",3,"click"],[1,"fa","fa-pencil"],["class","btn btn-xs btn-outline btn-danger",3,"click",4,"ngIf"],[1,"btn","btn-xs","btn-outline","btn-danger",3,"click"],[1,"fa","fa-trash"]],template:function(t,e){1&t&&(a["\u0275\u0275elementStart"](0,"div",0),a["\u0275\u0275elementStart"](1,"table",1),a["\u0275\u0275elementStart"](2,"thead"),a["\u0275\u0275elementStart"](3,"tr"),a["\u0275\u0275elementStart"](4,"th"),a["\u0275\u0275text"](5,"Email"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](6,"th"),a["\u0275\u0275text"](7,"Nome"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](8,"th"),a["\u0275\u0275text"](9,"Cargo"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275element"](10,"th",2),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](11,"tbody"),a["\u0275\u0275template"](12,_,12,4,"tr",3),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&t&&(a["\u0275\u0275advance"](12),a["\u0275\u0275property"]("ngForOf",e.usuarios))},directives:[o.l,o.m],styles:[""]}),t}(),V=n("zGDX"),N=(n("KyPx"),n("jKAO")),F=n("QJY3"),z=n("OlyH");function q(t,e){1&t&&a["\u0275\u0275element"](0,"span",20)}function L(t,e){if(1&t&&(a["\u0275\u0275elementStart"](0,"span"),a["\u0275\u0275text"](1),a["\u0275\u0275template"](2,q,1,0,"span",19),a["\u0275\u0275elementEnd"]()),2&t){var n=a["\u0275\u0275nextContext"]();a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate1"](" ",n.etapa.descricao," "),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",n.etapa.etapaObrigatoriaId)}}function T(t,e){if(1&t){var n=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"textarea",21),a["\u0275\u0275listener"]("ngModelChange",(function(t){return a["\u0275\u0275restoreView"](n),a["\u0275\u0275nextContext"]().etapa.descricao=t})),a["\u0275\u0275elementEnd"]()}if(2&t){var o=a["\u0275\u0275nextContext"]();a["\u0275\u0275property"]("ngModel",o.etapa.descricao)("readonly",!o.editando)}}function D(t,e){if(1&t){var n=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"button",22),a["\u0275\u0275listener"]("click",(function(){return a["\u0275\u0275restoreView"](n),a["\u0275\u0275nextContext"]().onExcluir()})),a["\u0275\u0275element"](1,"span",23),a["\u0275\u0275text"](2," Remover "),a["\u0275\u0275elementEnd"]()}}var G=function(){function t(t){this.toasts=t,this.excluir=new a.EventEmitter,this.adicionar=new a.EventEmitter,this.salvar=new a.EventEmitter,this.cancelar=new a.EventEmitter,this.editando=!1}return t.prototype.ngOnInit=function(){},t.prototype.habilitarEdicao=function(){this.editando=!0},t.prototype.onAtualizarEtapa=function(){this.editando=!1,this.salvar.emit(this.etapa)},t.prototype.onCancelarEdicao=function(){this.editando=!1,this.cancelar.emit(this.etapa)},t.prototype.onExcluir=function(){var t=this;this.toasts.confirmModal("Tem certeza que deseja excluir essa etapa do cronograma padr\xe3o?","Confirma\xe7\xe3o").pipe(Object(O.a)((function(t){return t}))).subscribe((function(e){return t.excluir.emit(t.etapa)}))},t.prototype.onAdicionar=function(){var t=this,e={contaId:this.etapa.contaId,descricao:"Descreva aqui o prop\xf3sito dessa etapa...",nome:"Nova Etapa Adicionada",duracaoPadrao:0,etapaObrigatoriaId:void 0,id:void 0,ordem:this.etapa.ordem+1};this.toasts.confirmModal("Tem certeza que deseja adicionar ao cronograma padr\xe3o uma nova etapa depois da etapa "+this.etapa.nome+"?","Confirma\xe7\xe3o").pipe(Object(O.a)((function(t){return t}))).subscribe((function(n){return t.adicionar.emit(e)}))},t.\u0275fac=function(e){return new(e||t)(a["\u0275\u0275directiveInject"](y.a))},t.\u0275cmp=a["\u0275\u0275defineComponent"]({type:t,selectors:[["app-etapa-padrao"]],inputs:{etapa:"etapa"},outputs:{excluir:"excluir",adicionar:"adicionar",salvar:"salvar",cancelar:"cancelar"},decls:25,vars:13,consts:[["required","","name","Nome","label","Nome da Etapa",3,"ngModel","readOnly","showLabel","control","ngModelChange"],["Nome","ngModel"],[4,"ngIf"],["class","form-control","rows","4",3,"ngModel","readonly","ngModelChange",4,"ngIf"],[1,"row","m-b-sm"],[1,"col-lg-4","col-md-6","col-sm-12"],["required","","name","duracaoPadrao","label","Dura\xe7\xe3o padr\xe3o (dias)",2,"font-weight","bold",3,"ngModel","readOnly","showLabel","control","ngModelChange"],["duracaoPadrao","ngModel"],[1,"row"],[1,"col-sm-12"],[1,"btn","btn-outline-primary","btn-editar","btn-sm","m-r-sm",3,"click"],[1,"fa","fa-pencil"],["class","btn btn-outline-danger btn-excluir btn-sm m-r-sm",3,"click",4,"ngIf"],[1,"btn","btn-outline-success","btn-sm","btn-salvar","m-r-sm",3,"click"],[1,"fa","fa-floppy-o"],[1,"btn","btn-outline-primary","btn-sm","btn-cancelar","m-r-sm",3,"click"],[1,"fa","fa-ban"],["tooltip","Adicione uma nova etapa posterior a esta.",1,"btn","btn-outline-success","btn-no-borders","btn-adicionar","btn-sm","float-right",3,"click"],[1,"fa","fa-plus"],["class","fa fa-lock","tooltip","Essa etapa \xe9 obrigat\xf3ria, portanto n\xe3o pode ser exclu\xedda.",4,"ngIf"],["tooltip","Essa etapa \xe9 obrigat\xf3ria, portanto n\xe3o pode ser exclu\xedda.",1,"fa","fa-lock"],["rows","4",1,"form-control",3,"ngModel","readonly","ngModelChange"],[1,"btn","btn-outline-danger","btn-excluir","btn-sm","m-r-sm",3,"click"],[1,"fa","fa-trash"]],template:function(t,e){if(1&t&&(a["\u0275\u0275elementStart"](0,"div"),a["\u0275\u0275elementStart"](1,"h2"),a["\u0275\u0275elementStart"](2,"app-custom-input",0,1),a["\u0275\u0275listener"]("ngModelChange",(function(t){return e.etapa.nome=t})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](4,"p"),a["\u0275\u0275template"](5,L,3,2,"span",2),a["\u0275\u0275template"](6,T,1,2,"textarea",3),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](7,"div",4),a["\u0275\u0275elementStart"](8,"div",5),a["\u0275\u0275elementStart"](9,"app-custom-input",6,7),a["\u0275\u0275listener"]("ngModelChange",(function(t){return e.etapa.duracaoPadrao=t})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](11,"div",8),a["\u0275\u0275elementStart"](12,"div",9),a["\u0275\u0275elementStart"](13,"button",10),a["\u0275\u0275listener"]("click",(function(){return e.habilitarEdicao()})),a["\u0275\u0275element"](14,"span",11),a["\u0275\u0275text"](15," Editar "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](16,D,3,0,"button",12),a["\u0275\u0275elementStart"](17,"button",13),a["\u0275\u0275listener"]("click",(function(){return e.onAtualizarEtapa()})),a["\u0275\u0275element"](18,"span",14),a["\u0275\u0275text"](19," Salvar "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](20,"button",15),a["\u0275\u0275listener"]("click",(function(){return e.onCancelarEdicao()})),a["\u0275\u0275element"](21,"span",16),a["\u0275\u0275text"](22," Cancelar "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](23,"button",17),a["\u0275\u0275listener"]("click",(function(){return e.onAdicionar()})),a["\u0275\u0275element"](24,"span",18),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&t){var n=a["\u0275\u0275reference"](3),o=a["\u0275\u0275reference"](10);a["\u0275\u0275classProp"]("editando",e.editando),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngModel",e.etapa.nome)("readOnly",!e.editando)("showLabel",!1)("control",n),a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("ngIf",!e.editando),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",e.editando),a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("ngModel",e.etapa.duracaoPadrao)("readOnly",!e.editando)("showLabel",!0)("control",o),a["\u0275\u0275advance"](7),a["\u0275\u0275property"]("ngIf",!e.etapa.etapaObrigatoriaId)}},directives:[N.a,F.RequiredValidator,F.NgControlStatus,F.NgModel,o.m,z.a,F.DefaultValueAccessor],styles:[".btn-no-borders[_ngcontent-%COMP%]{border:0}.fa-lock[_ngcontent-%COMP%]{padding-left:8px;padding-right:8px}[_nghost-%COMP%]     app-custom-input .form-group{margin-bottom:8px}[_nghost-%COMP%]     app-datepicker .input-group-addon{line-height:initial}[_nghost-%COMP%]     app-custom-input input, textarea[_ngcontent-%COMP%]{border:0;padding:0;font-size:inherit}[_nghost-%COMP%]     app-custom-input label{margin-bottom:0}[_nghost-%COMP%]     app-custom-input input[readonly]{background-color:transparent}[_nghost-%COMP%]   .editando[_ngcontent-%COMP%]     app-custom-input input, [_nghost-%COMP%]   .editando[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{border:1px solid #e5e6e7;padding:6px 12px;color:#676a6c}[_nghost-%COMP%]   .editando[_ngcontent-%COMP%]     app-custom-input label{margin-bottom:initial}.btn-cancelar[_ngcontent-%COMP%], .btn-salvar[_ngcontent-%COMP%], .editando[_ngcontent-%COMP%]   .btn-editar[_ngcontent-%COMP%], .editando[_ngcontent-%COMP%]   .btn-excluir[_ngcontent-%COMP%], .editando[_ngcontent-%COMP%]   .fa-lock[_ngcontent-%COMP%]{display:none}.editando[_ngcontent-%COMP%]   .btn-cancelar[_ngcontent-%COMP%], .editando[_ngcontent-%COMP%]   .btn-salvar[_ngcontent-%COMP%]{display:inline}"]}),t}();function J(t,e){if(1&t){var n=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"div",2),a["\u0275\u0275elementStart"](1,"app-etapa-padrao",3),a["\u0275\u0275listener"]("adicionar",(function(t){return a["\u0275\u0275restoreView"](n),a["\u0275\u0275nextContext"]().adicionar(t)}))("cancelar",(function(t){return a["\u0275\u0275restoreView"](n),a["\u0275\u0275nextContext"]().cancelar(t)}))("excluir",(function(t){return a["\u0275\u0275restoreView"](n),a["\u0275\u0275nextContext"]().excluir(t)}))("salvar",(function(t){return a["\u0275\u0275restoreView"](n),a["\u0275\u0275nextContext"]().salvar(t)})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()}if(2&t){var o=e.$implicit;a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("etapa",o)}}var B=function(){function t(t,e){this.contasApi=t,this.toast=e,this.recarregaCronograma=new a.EventEmitter}return t.prototype.ngOnInit=function(){},t.prototype.adicionar=function(t){var e=this;this.contasApi.postEtapaCronogramaPadrao(t).subscribe((function(t){e.recarregaCronograma.emit(),e.toast.showMessage({message:"Etapa adicionada com sucesso!",title:"Sucesso",type:x.a.success})}))},t.prototype.cancelar=function(t){this.recarregaCronograma.emit()},t.prototype.excluir=function(t){var e=this;this.contasApi.deleteEtapaCronogramaPadrao(t.id).subscribe((function(t){e.recarregaCronograma.emit(),e.toast.showMessage({message:"Etapa exclu\xedda com sucesso!",title:"Sucesso",type:x.a.success})}))},t.prototype.salvar=function(t){var e=this;this.contasApi.putEtapaCronogramaPadrao(t).subscribe((function(t){e.recarregaCronograma.emit(),e.toast.showMessage({message:"Etapa atualizada com sucesso!",title:"Sucesso",type:x.a.success})}))},t.\u0275fac=function(e){return new(e||t)(a["\u0275\u0275directiveInject"](g),a["\u0275\u0275directiveInject"](y.a))},t.\u0275cmp=a["\u0275\u0275defineComponent"]({type:t,selectors:[["app-cronograma-padrao"]],inputs:{conta:"conta",etapas:"etapas"},outputs:{recarregaCronograma:"recarregaCronograma"},decls:2,vars:1,consts:[["id","vertical-timeline",1,"vertical-container","dark-timeline","no-margins"],["timeline-item","","class","vertical-timeline-block",4,"ngFor","ngForOf"],["timeline-item","",1,"vertical-timeline-block"],[3,"etapa","adicionar","cancelar","excluir","salvar"]],template:function(t,e){1&t&&(a["\u0275\u0275elementStart"](0,"div",0),a["\u0275\u0275template"](1,J,2,1,"div",1),a["\u0275\u0275elementEnd"]()),2&t&&(a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngForOf",e.etapas))},directives:[o.l,V.a,G],styles:[""]}),t}(),R=function(){function t(t,e,n,a,o){this.route=t,this.usuariosApi=e,this.toast=n,this.contasApi=a,this.router=o}return t.prototype.ngOnInit=function(){var t=this;this.route.data.pipe(Object(O.a)((function(t){return t.hasOwnProperty("conta")})),Object(j.a)((function(t){return t.conta})),Object(I.a)((function(e){return t.conta=e})),Object(w.a)((function(e){return t.contasApi.getCronogramaPadrao()}))).subscribe((function(e){t.cronograma=e}))},t.prototype.excluir=function(t){var e=this;this.usuariosApi.delete(t.id).pipe(Object(w.a)((function(t){return e.usuariosApi.getAll()}))).subscribe((function(t){e.toast.showMessage({message:"Usu\xe1rio exclu\xeddo com sucesso!",title:"Sucesso",type:x.a.success}),e.conta.usuarios=t}))},t.prototype.editarUsuario=function(t){this.router.navigate(["contas","usuarios",t.id])},t.prototype.recarregaCronograma=function(){var t=this;this.contasApi.getCronogramaPadrao().subscribe((function(e){t.cronograma=e}))},t.\u0275fac=function(e){return new(e||t)(a["\u0275\u0275directiveInject"](r.a),a["\u0275\u0275directiveInject"](s.a),a["\u0275\u0275directiveInject"](y.a),a["\u0275\u0275directiveInject"](g),a["\u0275\u0275directiveInject"](r.d))},t.\u0275cmp=a["\u0275\u0275defineComponent"]({type:t,selectors:[["app-conta-usuario"]],decls:23,vars:4,consts:[[1,"container"],["title","Minha Conta"],[1,"row"],[1,"col-sm-12"],[3,"conta"],[1,"btn","btn-outline-primary","btn-lg"],["routerLink","../usuarios/novo",1,"btn","btn-primary","m-b-sm"],[1,"fa","fa-plus"],[3,"usuarios","excluir","editar"],[1,"row","m-b-sm"],[1,"col-md-12"],[3,"etapas","conta","recarregaCronograma"]],template:function(t,e){1&t&&(a["\u0275\u0275elementStart"](0,"div",0),a["\u0275\u0275elementStart"](1,"app-panel",1),a["\u0275\u0275elementStart"](2,"div",2),a["\u0275\u0275elementStart"](3,"div",3),a["\u0275\u0275element"](4,"app-conta-info",4),a["\u0275\u0275elementStart"](5,"button",5),a["\u0275\u0275text"](6,"Fazer upgrade!"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275element"](7,"hr"),a["\u0275\u0275elementStart"](8,"h4"),a["\u0275\u0275text"](9,"Usu\xe1rios com permiss\xe3o de acesso"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275element"](10,"br"),a["\u0275\u0275elementStart"](11,"a",6),a["\u0275\u0275element"](12,"span",7),a["\u0275\u0275text"](13," Adicionar Usu\xe1rio "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](14,"app-usuarios-lista",8),a["\u0275\u0275listener"]("excluir",(function(t){return e.excluir(t)}))("editar",(function(t){return e.editarUsuario(t)})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275element"](15,"hr"),a["\u0275\u0275elementStart"](16,"h4"),a["\u0275\u0275text"](17,"Etapas Padr\xf5es do Cronograma"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](18,"p"),a["\u0275\u0275text"](19,"Adicione, exclua ou edite as etapas padr\xf5es do cronograma, utilizadas no momento de cria\xe7\xe3o de cada elei\xe7\xe3o."),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](20,"div",9),a["\u0275\u0275elementStart"](21,"div",10),a["\u0275\u0275elementStart"](22,"app-cronograma-padrao",11),a["\u0275\u0275listener"]("recarregaCronograma",(function(){return e.recarregaCronograma()})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&t&&(a["\u0275\u0275advance"](4),a["\u0275\u0275property"]("conta",e.conta),a["\u0275\u0275advance"](10),a["\u0275\u0275property"]("usuarios",e.conta.usuarios),a["\u0275\u0275advance"](8),a["\u0275\u0275property"]("etapas",e.cronograma)("conta",e.conta))},directives:[M.a,A,r.f,U,B],styles:["#status[_ngcontent-%COMP%]{font-size:12px;font-weight:600}"]}),t}(),$=n("Sy1n"),Q=function(){function t(t,e){this.fb=t,this.location=e,this.usuario=new E.b,this.salvar=new a.EventEmitter,this.cancelar=new a.EventEmitter}return t.prototype.ngOnInit=function(){this.form=this.fb.group({id:[{value:this.usuario.id,disabled:!0}],nome:[this.usuario.nome,[F.Validators.required,F.Validators.maxLength(255)]],email:[this.usuario.email,[F.Validators.required,F.Validators.email,F.Validators.maxLength(100)]],cargo:[this.usuario.cargo,[F.Validators.required,F.Validators.maxLength(255)]]})},t.prototype.cancelarEdicao=function(){this.location.back(),this.cancelar.emit()},t.prototype.salvarUsuario=function(){this.salvar.emit(this.form.getRawValue())},t.\u0275fac=function(e){return new(e||t)(a["\u0275\u0275directiveInject"](F.FormBuilder),a["\u0275\u0275directiveInject"](o.i))},t.\u0275cmp=a["\u0275\u0275defineComponent"]({type:t,selectors:[["app-usuario-form"]],inputs:{usuario:"usuario"},outputs:{salvar:"salvar",cancelar:"cancelar"},decls:16,vars:6,consts:[[3,"formGroup","submit"],[1,"row"],[1,"col-md-3","col-sm-8"],["formControlName","id","name","Id","label","Id",3,"control"],[1,"col-lg-4","col-md-6"],["formControlName","email","name","Email","label","Email",3,"control"],["formControlName","nome","name","Nome","label","Nome",3,"control"],[1,"col-lg-4","col-md-12"],["formControlName","cargo","name","Cargo","label","Cargo",3,"control"],["type","submit",1,"btn","btn-primary","m-r-sm",3,"disabled"],[1,"fa","fa-save"],["type","button",1,"btn","btn-default",3,"click"]],template:function(t,e){1&t&&(a["\u0275\u0275elementStart"](0,"form",0),a["\u0275\u0275listener"]("submit",(function(){return e.salvarUsuario()})),a["\u0275\u0275elementStart"](1,"div",1),a["\u0275\u0275elementStart"](2,"div",2),a["\u0275\u0275element"](3,"app-custom-input",3),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](4,"div",1),a["\u0275\u0275elementStart"](5,"div",4),a["\u0275\u0275element"](6,"app-custom-input",5),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](7,"div",4),a["\u0275\u0275element"](8,"app-custom-input",6),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](9,"div",7),a["\u0275\u0275element"](10,"app-custom-input",8),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](11,"button",9),a["\u0275\u0275element"](12,"i",10),a["\u0275\u0275text"](13," Salvar"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](14,"button",11),a["\u0275\u0275listener"]("click",(function(){return e.cancelarEdicao()})),a["\u0275\u0275text"](15,"Cancelar"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&t&&(a["\u0275\u0275property"]("formGroup",e.form),a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("control",e.form.get("id")),a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("control",e.form.get("email")),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("control",e.form.get("nome")),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("control",e.form.get("cargo")),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("disabled",e.form.invalid))},directives:[F["\u0275angular_packages_forms_forms_y"],F.NgControlStatusGroup,F.FormGroupDirective,N.a,F.NgControlStatus,F.FormControlName],styles:[""]}),t}(),X=function(){function t(t,e,n){this.usuariosApi=t,this.toast=e,this.location=n}return t.prototype.ngOnInit=function(){},t.prototype.salvar=function(t){var e=this;this.usuariosApi.post(t).subscribe((function(t){e.toast.showMessage({message:"Usu\xe1rio criado com sucesso!",title:"Sucesso!",type:x.a.success}),e.location.back()}))},t.\u0275fac=function(e){return new(e||t)(a["\u0275\u0275directiveInject"](s.a),a["\u0275\u0275directiveInject"](y.a),a["\u0275\u0275directiveInject"](o.i))},t.\u0275cmp=a["\u0275\u0275defineComponent"]({type:t,selectors:[["app-usuario-novo"]],decls:3,vars:0,consts:[[1,"container"],["title","Cadastro de Novo Usu\xe1rio"],[3,"salvar"]],template:function(t,e){1&t&&(a["\u0275\u0275elementStart"](0,"div",0),a["\u0275\u0275elementStart"](1,"app-panel",1),a["\u0275\u0275elementStart"](2,"app-usuario-form",2),a["\u0275\u0275listener"]("salvar",(function(t){return e.salvar(t)})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]())},directives:[M.a,Q],styles:[""]}),t}(),Y=function(){function t(t,e,n,a){this.route=t,this.usuariosApi=e,this.toast=n,this.location=a}return t.prototype.ngOnInit=function(){var t=this;this.route.data.pipe(Object(O.a)((function(t){return t.hasOwnProperty("usuario")})),Object(j.a)((function(t){return t.usuario}))).subscribe((function(e){t.usuario=e}))},t.prototype.salvar=function(t){var e=this;this.usuariosApi.put(t.id,t).subscribe((function(t){e.toast.showMessage({message:"Usu\xe1rio atualizado com sucesso!",title:"Sucesso!",type:x.a.success}),e.location.back()}))},t.\u0275fac=function(e){return new(e||t)(a["\u0275\u0275directiveInject"](r.a),a["\u0275\u0275directiveInject"](s.a),a["\u0275\u0275directiveInject"](y.a),a["\u0275\u0275directiveInject"](o.i))},t.\u0275cmp=a["\u0275\u0275defineComponent"]({type:t,selectors:[["app-usuario-edicao"]],decls:3,vars:1,consts:[[1,"container"],["title","Edi\xe7\xe3o de Usu\xe1rio"],[3,"usuario","salvar"]],template:function(t,e){1&t&&(a["\u0275\u0275elementStart"](0,"div",0),a["\u0275\u0275elementStart"](1,"app-panel",1),a["\u0275\u0275elementStart"](2,"app-usuario-form",2),a["\u0275\u0275listener"]("salvar",(function(t){return e.salvar(t)})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&t&&(a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("usuario",e.usuario))},directives:[M.a,Q],styles:[""]}),t}(),Z=n("9JBg"),K=function(){function t(){this.acessar=new a.EventEmitter}return t.prototype.ngOnInit=function(){},t.prototype.onAcessar=function(){this.acessar.emit(this.conta)},t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a["\u0275\u0275defineComponent"]({type:t,selectors:[["app-card-conta"]],inputs:{conta:"conta"},outputs:{acessar:"acessar"},decls:10,vars:2,consts:[[1,"ibox"],[1,"ibox-content","product-box"],[1,"product-desc"],[1,"actions"],[1,"btn","btn-success","btn-outline","m-r-sm",3,"click"]],template:function(t,e){1&t&&(a["\u0275\u0275elementStart"](0,"div",0),a["\u0275\u0275elementStart"](1,"div",1),a["\u0275\u0275elementStart"](2,"div",2),a["\u0275\u0275elementStart"](3,"h4"),a["\u0275\u0275text"](4),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](5,"p"),a["\u0275\u0275text"](6),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](7,"div",3),a["\u0275\u0275elementStart"](8,"button",4),a["\u0275\u0275listener"]("click",(function(){return e.onAcessar()})),a["\u0275\u0275text"](9,"Acessar"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&t&&(a["\u0275\u0275advance"](4),a["\u0275\u0275textInterpolate1"]("Conta #",e.conta.id,""),a["\u0275\u0275advance"](2),a["\u0275\u0275textInterpolate"](e.conta.planoDescricao))},styles:[".ibox[_ngcontent-%COMP%]{height:100%;margin-bottom:0}.ibox-content[_ngcontent-%COMP%], .product-desc[_ngcontent-%COMP%]{display:flex;flex:1 0 auto;flex-direction:column}p[_ngcontent-%COMP%]{margin-bottom:0}.ibox-content[_ngcontent-%COMP%]{padding-bottom:20px}.product-box[_ngcontent-%COMP%]{height:100%}.actions[_ngcontent-%COMP%]{margin-left:20px}.label[_ngcontent-%COMP%]{font-size:11px;font-weight:400}"]}),t}();function H(t,e){if(1&t){var n=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"div",2),a["\u0275\u0275elementStart"](1,"app-card-conta",3),a["\u0275\u0275listener"]("acessar",(function(t){return a["\u0275\u0275restoreView"](n),a["\u0275\u0275nextContext"]().acessarConta(t)})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()}if(2&t){var o=e.$implicit;a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("conta",o)}}var W=[{path:"",data:{navigationType:$.b.Top},children:[{path:"",component:function(){function t(t,e,n,a){this.route=t,this.loginApi=e,this.authService=n,this.router=a}return t.prototype.ngOnInit=function(){var t=this;this.route.data.pipe(Object(j.a)((function(t){return t.contas}))).subscribe((function(e){return t.contas=e}))},t.prototype.acessarConta=function(t){var e=this;this.loginApi.postAlterarContaTokenAdministrador(t.id).subscribe((function(t){e.authService.token=t.accessToken,e.router.navigate(["/eleicoes"])}))},t.\u0275fac=function(e){return new(e||t)(a["\u0275\u0275directiveInject"](r.a),a["\u0275\u0275directiveInject"](Z.a),a["\u0275\u0275directiveInject"](b.a),a["\u0275\u0275directiveInject"](r.d))},t.\u0275cmp=a["\u0275\u0275defineComponent"]({type:t,selectors:[["ng-component"]],decls:6,vars:1,consts:[[1,"row","flex-row"],["class","col-lg-3 col-md-4 col-xs-12",4,"ngFor","ngForOf"],[1,"col-lg-3","col-md-4","col-xs-12"],[3,"conta","acessar"]],template:function(t,e){1&t&&(a["\u0275\u0275elementStart"](0,"h4"),a["\u0275\u0275text"](1,"Acesso Administrador"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](2,"p"),a["\u0275\u0275text"](3,"Escolha a conta que deseja acessar:"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](4,"div",0),a["\u0275\u0275template"](5,H,2,1,"div",1),a["\u0275\u0275elementEnd"]()),2&t&&(a["\u0275\u0275advance"](5),a["\u0275\u0275property"]("ngForOf",e.contas))},directives:[o.l,K],styles:["app-card-conta[_ngcontent-%COMP%]{height:100%;margin-bottom:20px}"]}),t}(),canActivate:[C],resolve:{contas:S},data:{navigationType:$.b.Top}},{path:"minha-conta",component:R,resolve:{conta:h}},{path:"administradores",children:[{path:"",component:function(){function t(t,e){this.usuariosApi=t,this.router=e}return t.prototype.ngOnInit=function(){var t=this;this.usuariosApi.getUsuariosAdministradores().subscribe((function(e){return t.usuarios=e}))},t.prototype.editar=function(t){this.router.navigate(["contas","administradores","usuarios",t.id])},t.\u0275fac=function(e){return new(e||t)(a["\u0275\u0275directiveInject"](s.a),a["\u0275\u0275directiveInject"](r.d))},t.\u0275cmp=a["\u0275\u0275defineComponent"]({type:t,selectors:[["ng-component"]],decls:8,vars:2,consts:[[1,"container"],["title","Usu\xe1rio Administradores"],[1,"row"],[1,"col-sm-12"],["routerLink","usuarios/novo",1,"btn","btn-primary","m-b-sm"],[1,"fa","fa-plus"],[3,"usuarios","permitirExclusao","editar"]],template:function(t,e){1&t&&(a["\u0275\u0275elementStart"](0,"div",0),a["\u0275\u0275elementStart"](1,"app-panel",1),a["\u0275\u0275elementStart"](2,"div",2),a["\u0275\u0275elementStart"](3,"div",3),a["\u0275\u0275elementStart"](4,"a",4),a["\u0275\u0275element"](5,"span",5),a["\u0275\u0275text"](6," Adicionar Usu\xe1rio "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](7,"app-usuarios-lista",6),a["\u0275\u0275listener"]("editar",(function(t){return e.editar(t)})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&t&&(a["\u0275\u0275advance"](7),a["\u0275\u0275property"]("usuarios",e.usuarios)("permitirExclusao",!1))},directives:[M.a,r.f,U],styles:[""]}),t}(),canActivate:[C]},{path:"usuarios",children:[{path:"novo",component:function(){function t(t,e,n){this.usuariosApi=t,this.toast=e,this.location=n}return t.prototype.ngOnInit=function(){},t.prototype.salvar=function(t){var e=this;this.usuariosApi.postUsuarioAdministrador(t).subscribe((function(t){e.toast.showMessage({message:"Usu\xe1rio criado com sucesso!",title:"Sucesso!",type:x.a.success}),e.location.back()}))},t.\u0275fac=function(e){return new(e||t)(a["\u0275\u0275directiveInject"](s.a),a["\u0275\u0275directiveInject"](y.a),a["\u0275\u0275directiveInject"](o.i))},t.\u0275cmp=a["\u0275\u0275defineComponent"]({type:t,selectors:[["ng-component"]],decls:3,vars:0,consts:[[1,"container"],["title","Cadastro de Novo Usu\xe1rio"],[3,"salvar"]],template:function(t,e){1&t&&(a["\u0275\u0275elementStart"](0,"div",0),a["\u0275\u0275elementStart"](1,"app-panel",1),a["\u0275\u0275elementStart"](2,"app-usuario-form",2),a["\u0275\u0275listener"]("salvar",(function(t){return e.salvar(t)})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]())},directives:[M.a,Q],styles:[""]}),t}(),canActivate:[C]},{path:":id",component:function(){function t(t,e,n,a){this.route=t,this.usuariosApi=e,this.toast=n,this.location=a}return t.prototype.ngOnInit=function(){var t=this;this.route.data.pipe(Object(O.a)((function(t){return t.hasOwnProperty("usuario")})),Object(j.a)((function(t){return t.usuario}))).subscribe((function(e){t.usuario=e}))},t.prototype.salvar=function(t){var e=this;this.usuariosApi.putUsuarioAdministrador(t.id,t).subscribe((function(t){e.toast.showMessage({message:"Usu\xe1rio atualizado com sucesso!",title:"Sucesso!",type:x.a.success}),e.location.back()}))},t.\u0275fac=function(e){return new(e||t)(a["\u0275\u0275directiveInject"](r.a),a["\u0275\u0275directiveInject"](s.a),a["\u0275\u0275directiveInject"](y.a),a["\u0275\u0275directiveInject"](o.i))},t.\u0275cmp=a["\u0275\u0275defineComponent"]({type:t,selectors:[["ng-component"]],decls:3,vars:1,consts:[[1,"container"],["title","Edi\xe7\xe3o de Usu\xe1rio"],[3,"usuario","salvar"]],template:function(t,e){1&t&&(a["\u0275\u0275elementStart"](0,"div",0),a["\u0275\u0275elementStart"](1,"app-panel",1),a["\u0275\u0275elementStart"](2,"app-usuario-form",2),a["\u0275\u0275listener"]("salvar",(function(t){return e.salvar(t)})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&t&&(a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("usuario",e.usuario))},directives:[M.a,Q],styles:[""]}),t}(),resolve:{usuario:l},canActivate:[C]}]}]},{path:"usuarios",children:[{path:"novo",component:X},{path:":id",component:Y,resolve:{usuario:l}}]}]}],tt=function(){function t(){}return t.\u0275mod=a["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[r.g.forChild(W)],r.g]}),t}(),et=n("PCNd");n.d(e,"ContasModule",(function(){return nt}));var nt=function(){function t(){}return t.\u0275mod=a["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[o.c,tt,et.a]]}),t}()}}]);