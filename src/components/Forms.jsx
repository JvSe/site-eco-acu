import React from 'react';
import { useForm } from 'react-hook-form';
import '../styles/components/Forms.module.css';

export default function Forms() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => console.log(data);

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