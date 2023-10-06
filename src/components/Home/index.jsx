import React, { useEffect, useState } from 'react'
import Table from '../../Shared/Table'
import CourseColumn from './coloumn'
// import DrawerWrapper from '../../Shared/DrawerWrapper'
// import Input from '../../Shared/Input'
import axios, { Axios } from 'axios'
import { useForm } from 'react-hook-form'
import DrawerWrapper from '../../Shared/DrawerWrapper'
import Input from '../../common/Input'
import { homeSchema } from '../../common/Schema'
import { yupResolver } from '@hookform/resolvers/yup'
import api from '../../Axios/Axios'
import { DefaultSidebar } from '../../Shared/Sidebar'
const Home = () => {
  const [open, setOpen] = useState(false)
  const [updateData, setUpdateData] = useState()
  const [datas, setData] = useState([])

  const defaultValue = {
    id: undefined,
    c_name: undefined,
    c_description: undefined,
    c_price: undefined,
  }

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    mode: ' onChange',
    reValidateMode: 'onTouched',
    resolver: yupResolver(homeSchema),
    defaultValue,
  })

  const getList = async () => {
    try {
      const resp = await api.get(`/course/list`)
      if (resp) {
        setData(resp)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const onSubmit = async (values) => {
    try {
      const payload = {
        ...values,
      }
      const res = await api[watch('id') ? 'put' : 'post'](
        `/course/${watch('id') ? `update/${watch('id')}` : 'create'}`,
        payload
      )

      if (res) {
        getList()
        setOpen(false)
        reset({ ...defaultValue })
      }
    } catch (error) {
      console.log(error.resp)
    }
  }

  useEffect(() => {
    getList()
  }, [])

  useEffect(() => {
    if (open && updateData?.id) {
      clearErrors()
      setValue('id', updateData?.original?._id)
      setValue('c_name', updateData?.original?.c_name)
      setValue('c_description', updateData?.original?.c_description)
      setValue('c_price', updateData?.original?.c_price)
    }
  }, [open])

  return (
    <>
      <DefaultSidebar
        children={
          <div className="container w-full max-w-[80vw] mx-6 float-right">
            <nav className="h-12 my-2 border border-current bg-slate-200 rounded-md">
              <div className="flex justify-end">
                <div />
                <button
                  className="mx-3 bg-black rounded-md text-white py-1 px-5 my-2 hover:bg-blue-600 btn bg-blue-500 text-white leading-6 "
                  onClick={() => {
                    setUpdateData()
                    setOpen(true)
                    reset({ ...defaultValue })
                  }}
                >
                  Create
                </button>
              </div>
            </nav>
            <Table
              data={datas}
              columns={CourseColumn({ datas, setOpen, setUpdateData, getList }).columns}
            />

            <DrawerWrapper
              setOpen={setOpen}
              open={open}
              title={watch('id') ? `Update Detail` : `Add Detail`}
              children={
                <>
                  <Input
                    label="Course Title"
                    placeholder="Enter course title"
                    value={watch('c_name')}
                    rest={register('c_name', { required: true })}
                    onChange={(e) => setValue('c_name', e?.target?.value)}
                    error={errors?.c_name?.message}
                    mandatory
                  />

                  <br />
                  <Input
                    label="Course Description"
                    placeholder="Enter course description"
                    value={watch('c_description')}
                    rest={register('c_description', { required: true })}
                    onChange={(e) => setValue('c_description', e.target.value)}
                    mandatory
                    error={errors?.c_description?.message}
                  />
                  <br />
                  <Input
                    label="Course Price"
                    type="number"
                    placeholder="Course Price"
                    value={watch('c_price')}
                    rest={register('c_price', { required: true })}
                    onChange={(e) => setValue('c_price', e.target.value)}
                    mandatory
                    error={errors?.c_price?.message}
                  />
                </>
              }
              footer={
                <div className="flex row-reverse">
                  <button
                    className="mx-3 bg-black rounded-md  py-1 px-5 my-2  btn bg-black text-white leading-6 "
                    onClick={() => setOpen(false)}
                  >
                    Close
                  </button>
                  <button
                    className="mx-3 bg-black rounded-md  py-1 px-5 my-2 hover:bg-blue-600 btn bg-blue-500 text-white leading-6 "
                    onClick={handleSubmit(onSubmit)}
                  >
                    {watch('id') ? `Update` : `Create`}
                  </button>
                </div>
              }
            />
          </div>
        }
      />
    </>
  )
}

export default Home
