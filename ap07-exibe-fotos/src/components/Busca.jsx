import React from 'react'

//esses imports são para uma barra de busca: um para o icone da lupa, um para o texto e outro para caixa de texto 
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'


export default class Busca extends React.Component {

    state = {
        termoDeBusca: ''
    }


    onTermoAlterado = (evento) => {
        //console.log(evento)
        this.setState({ termoDeBusca: evento.target.value })
    }

    onFormSubmit = (evento) => {
        evento.preventDefault()
        this.props.onBuscaRealizada(this.state.termoDeBusca)
    }

    render() {
        return (

            //flex flex-column= muda o display para colocar as coisas empilhadas, e não horizontalmente (horizontalmente é padrão)
            <form onSubmit={this.onFormSubmit}>
                <div className='flex flex-column'>
                    <IconField iconPosition='left' className='w-full'>
                        <InputIcon className='pi pi-search' />
                        <InputText
                            value={this.state.termoDeBusca}
                            className='w-full'
                            onChange={this.onTermoAlterado}
                            placeholder={this.props.dica}
                        />
                    </IconField>
                    <Button
                        className='mt-3'
                        label='OK' />
                </div>
            </form>
        )
    }
}

Busca.defaultProps = {
    dica: 'Buscar...'
}
