import React from 'react';
import { useForm } from 'react-hook-form';
import '../styles/components/Forms.module.scss';

export default function Forms() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        window.open(`mailto:atendimento.ecoacu@gmail.com?body=${data.nome} || ${data.email} || ${data.mensagem}`)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <label>Nome Completo:</label>
            <input type="text" {...register("nome")} />
            {errors.nome && <span style={{color:"red", fontSize:'1.5rem', fontWeight: 700, justifyItems:'center'}}>Este campo é obrigatório!</span>}

            <label>Email:</label>
            <input type="email"  {...register("email", {required: true})} />
            {errors.email && <span style={{color:"red", fontSize:'1.5rem', fontWeight: 700, justifyItems:'center'}}>Este campo é obrigatório!</span>}

            <label>Mensagem:</label>
            <textarea type="text" {...register("mensagem")}/>
            <input type="submit"/>
        </form>
    )
}