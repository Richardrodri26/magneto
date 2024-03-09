"use client"
import { montserrat } from '@/config/fonts';
import { useSignInMutation } from '@/remote/gql-generated';
import { Button } from '@/ui/components';
import { BasicFormProvider } from '@/ui/composables/FormProvider';
import { InputForm } from '@/ui/composables/FormRegister';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import React from 'react'
import { z } from 'zod'

const loginSchema = z.object({
  email: z.string({
    required_error: "email is required",
    invalid_type_error: "email must be a string",
  }),
  password: z.string({
    required_error: "password is required",
    invalid_type_error: "password must be a string",
  }),
})

type loginSchemaType = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  const { mutateAsync } = useSignInMutation({
    mutationKey: ['login']
  })
  const router = useRouter()


  const onSubmit = async (data: loginSchemaType) => {
    try {
      const dataVerified = loginSchema.parse(data);

      const resMutation = await mutateAsync({
        signInInput: {
          ...dataVerified
        }
      })

      if (!resMutation) {
        console.error("Error")
      }

      if (resMutation?.signIn?.token) {
        setCookie(process.env.NEXT_PUBLIC_USER_TOKEN!, resMutation?.signIn?.token,)
      }

      router.push('/inbox')

    } catch (error) {
      console.error("Error", error)
    }


  }

  return (
    <BasicFormProvider submit={onSubmit} schema={loginSchema}>
      <div
        style={{ boxShadow: '8px 8px 0px 0px #2B2B2B' }}
        className='h-[90%] max-h-[540px] w-[550px] p-10 border-2 border-zinc-800  rounded-md bg-white ml-auto mr-10 flex flex-col gap-3 items-center '>
        <div className='w-full h-[90%] flex-col justify-start items-center gap-7 inline-flex'>
          <p className={`self-stretch text-center text-zinc-800 text-3xl font-semibold ${montserrat.className} leading-loose`}>Iniciar sesión</p>

          <InputForm label='Correo electrónico' name={'email'} />
          {/* <InputFormCntx containerClass='flex-[0] w-full' className='flex-[0]' label='Contraseña' currentId={'password'} /> */}
          <InputForm name='password' label='Contraseña' />

          {/* <CheckBoxFormCntx label='Recuérdame' currentId='recuerdame' /> */}
        </div>

        <div className='flex flex-col gap-4'>
          <Button type='submit' className='w-64 h-10' variant={'secondary'}>
            Continuar
          </Button>

          <Button type='submit' className='w-64 h-10' variant={'ghost'}>
            Recuperar Contraseña
          </Button>
        </div>
      </div>
    </BasicFormProvider>
  )
}
