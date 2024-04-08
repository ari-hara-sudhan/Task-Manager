import React from 'react'
import ModalWrapper from './ModalWrapper'
import { Dialog } from '@headlessui/react'
import { useForm } from 'react-hook-form'
import Button from "./Button"
import Textbox from './Textbox'
import { useChangePasswordMutation } from '../redux/slices/api/userApiSlice'
import {toast} from "sonner"
import Loading from './Loader'




const ChangePassword = ({open,setOpen})=>{
    const{
        register,
        handleSubmit,
        formState:{errors},

    }=useForm()


const [changeUserPassword,{isLoading}]=useChangePasswordMutation();

const handleOnSubmit =async(data)=>{
    if(data.password !== data.cpass){
        toast.warning("password not match")
        return;
    }
    try{
        const res =await changeUserPassword(data).unwrap()
        toast.success("user addded sucessfully")

        setTimeout(()=>{
            setOpen(false)
        },1500)



    }catch(error){
        toast.error(error?.data?.message || error.error)
    }
}

    return (
       <>

       <ModalWrapper open ={open} setOpen={setOpen}>
       <form onSubmit={handleSubmit(handleOnSubmit)} className='='>
        <Dialog.Title as='h2' className='text-base font-bold leading-6 text-gray-900 mb-4'>
            change password
        </Dialog.Title>

        <div className='mt-4 flex flex-col gap-6'>
            <Textbox 

            placeholder="new password"
            type="password"
            name="password"
            label="new password"
            className="w-full rounded"
            register={register("password",{
                required:"password is req..."
            })}
            error={errors.password ? errors.password.message:""}

            />
                        <Textbox 

            placeholder=" confirm new password"
            type="confirm password"
            name="confirm password"
            label="confirm new password"
            className="w-full rounded"
            register={register("cpass",{
                required:" confrm password is req..."
            })}
            error={errors.cpass ? errors.cpass.message:""}

            />

        </div>

        {
            isLoading ?(
                <div className='py-5'>
                    <Loading/>

                </div>
            ):(
                <div className='py-5 mt-4 sm:flex sm:flex-row-reverse'>
                    <Button 
                    type="submit"
                    className="bg-blue-600 px-8 text-sm font-semibold text-white hover:bg-blue-400"
                    label="Save"/>

                    <button type='button'
                    className='bg-white px-5 text-sm font-semibold text-gray sm:w-auto'
                    onClick={()=>setOpen(false)}
                    >
                        cancel

                    </button>


                </div>
            )
        }

       </form>

       </ModalWrapper>
       
       </>
    )
}

export default ChangePassword
