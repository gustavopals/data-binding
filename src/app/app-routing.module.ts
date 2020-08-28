import { LoginComponent } from './login/login.component';
import { CursoRotasDetalheComponent } from './curso-rotas/curso-rotas-detalhe/curso-rotas-detalhe.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { VendasComponent } from './vendas/vendas.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { CalculaCustoViagemComponent } from './calcula-custo-viagem/calcula-custo-viagem.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CarrosComponent } from './carros/carros.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoRotasComponent } from './curso-rotas/curso-rotas.component';


const routes: Routes = [ //faz as rotas
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'cursos', component: CursosComponent },
    //{ path: 'cursos/:id' },
    { path: 'data-binding', component: DataBindingComponent },
    { path: 'calcula-custo-viagem', component: CalculaCustoViagemComponent },
    { path: 'cadastro-clientes', component: CadastroClientesComponent },
    { path: 'carros', component: CarrosComponent },
    { path: 'cadastro-produto', component: CadastroProdutoComponent },
    { path: 'vendas', component: VendasComponent },
    { path: 'exemplos-pipes', component: ExemplosPipesComponent },
    { path: 'curso-rotas', component: CursoRotasComponent },
    { path: 'curso-rota/:id', component: CursoRotasDetalheComponent },
    { path: 'curso-rota', component: CursoRotasDetalheComponent },
    { path: 'login', component: LoginComponent },

]
@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes) //importa o caminho
    ],
    exports: [
        RouterModule //exporta a pagina solicitada
    ]
})
export class AppRoutingModule { }
