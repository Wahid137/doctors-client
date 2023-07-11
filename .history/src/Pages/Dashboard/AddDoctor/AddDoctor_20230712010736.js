import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import Loading from '../../../Shared/Loading/Loading';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    console.log(imageHostKey);
    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentSpecialty');
            const data = await res.json();
            return data;
        }
    })

    const handleAddDoctor = data => {
        const image = data.image[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = 
    }
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='w-96 p-7 card shadow-lg'>
            <h2 className='text-4xl'>Add A Doctor</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text"
                        {...register("name", { required: "Name is required" })}
                        className="input input-bordered input-accent w-full" />
                    {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text"
                        {...register("email", { required: "Email Address is required" })}
                        className="input input-bordered input-accent w-full" />
                    {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
                </div>

                <div className="form-control input-accent w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Specialty</span>
                    </label>

                    <select
                        {...register('specialty')}
                        className="select select-bordered select-accent w-full max-w-xs">
                        {
                            specialties.map(specialty => <option
                                key={specialty._id}
                                value={specialty.name}
                            >{specialty.name}</option>)
                        }

                    </select>

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="file"
                        {...register("image", { required: "photo is required" })}
                        className="input input-bordered input-accent w-full" />
                    {errors.img && <p className="text-red-600">{errors.img?.message}</p>}
                </div>
                <br />
                <input className='btn btn-accent w-full' type="submit" value="Add DOCTOR" />
                <div>
                </div>
            </form>
        </div>
    );
};

export default AddDoctor;