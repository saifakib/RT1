import { useForm } from "react-hook-form";
import dbaxios from '../../utils/axios'
import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios' 

function CreateProduct() {
    const [confirm, setConfirm] = useState(false)
    const [imgurl, setImgUrl] = useState(null)
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const eventData = {
            name: data.name,
            imgurl: imgurl,
            price: data.price
        }
        postData(eventData)
    }

    const postData = (data) => {
        dbaxios.post('/admin/product/create', data)
        setConfirm(true)
    }

    const handleImage = (event) => {
        const imageData = new FormData();
        imageData.set('key','15360fd2234e5a7504e9de51f7adc5d9');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',imageData)
        .then((response) => {
            setImgUrl(response.data.data.url_viewer)
        }
            )
        .catch((err) => console.log(err))
    }


    return confirm ? (
        <Redirect to="/admin/product"></Redirect>
    ) :
        (
            <div className="container m-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3 row">
                        <label for="name" className="col-sm-2 col-form-label">Product Name</label>
                        <div className="col-sm-6">
                            <input type="text" id="name" className="form-control" {...register("name")} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label for="img" className="col-sm-2 col-form-label">Product Img</label>
                        <div className="col-sm-6">
                            <input type="file" id="img" className="form-control" onChange={handleImage} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label for="price" className="col-sm-2 col-form-label">Price</label>
                        <div className="col-sm-6">
                            <input type="number" id="price" className="form-control" {...register("price")} />
                        </div>
                    </div>

                    <input className="btn btn-primary" type="submit" value="Save" />
                </form>
            </div>
        )
}

export default CreateProduct;
