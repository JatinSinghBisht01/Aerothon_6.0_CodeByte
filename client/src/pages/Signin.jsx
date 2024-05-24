import React, { useContext, useEffect, useState } from 'react'
import CustomButton from '../components/CustomButton'
import CustomInput from '../components/CustomInput'
import { Context as AuthContext } from '../context/AuthContext'
import { toast } from 'react-toastify'

const Signin = () => {
  const { signin } = useContext(AuthContext);
  const [form , setForm] = useState({
    email: '',
    password: ''
  })
  
  const onSubmit = async(e) => {
    e.preventDefault();
    const response = await signin(form);

    if (response.success) {
        toast.success(response.message);
        history.push('/home');
    } else {
        toast.error(response.error);
    }
    
  }
  

  return (
    <>
    <div className="flex min-h-full flex-col justify-center px-6 py-32 lg:px-28">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img className="mx-auto h-20 w-auto" src="../../aircraft.png" alt="Aircraft" />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
        </div>
  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
          <CustomInput name={"email"} type={"email"} value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} autocomplete={"email"} required={true} />
        </div>
      </div>

        <div>
            <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                <div className="text-sm">
                    <a href="#" className="font-semibold text-sky-600 hover:text-sky-500">Forgot password?</a>
                </div>
                </div>
                <div className="mt-2">
                    <CustomInput name={"password"} type={"password"} value={form.password} onChange={(e) => setForm({...form, password: e.target.value})} autocomplete={"current-password"} required={true} />
                </div>
            </div>

        <div>
        <CustomButton type={"submit"} text={"Sign in"} onClick={onSubmit} />
      </div>
    </form>

    <p className="mt-10 text-center text-sm text-gray-500">
      Not a member?
      <a href="/signup" className="font-semibold leading-6 text-sky-600 hover:text-sky-500"> Join now !</a>
    </p>
  </div>
</div>
    </>
  )
}

export default Signin
