import { useForm } from 'react-hook-form';
import {
  closeModal,
  openModal,
  productCategories,
  toastError,
  toastSuccess,
} from '../../../utils/constant';
import React, { FormEvent, useEffect, useRef, useState } from 'react';
import {
  usePostProductMutation,
  useUpdateProductMutation,
} from '../../../redux/features/Products/Products.api';
import { TProduct } from '../../../types';
import WidthLayout from '../../../components/layout/WidthLayout';
import { useAppSelector } from '../../../redux/hook';
import axios from 'axios';
type TFormInputs = {
  name: string;
  description: string;
  price: string;
  stock: string;
  category: string;
  rating: number;
};
type TUpdateProductFormProps = {
  product: TProduct;
};

const UpdateProductForm = () => {
  const [imagesUrl, setImagesUrl] = useState<string[]>([]);
  const [fileImages, setFileImages] = useState<any[]>([]);
  const [mainImagesUrl, setMainImagesUrl] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const imageRef = useRef<HTMLInputElement>(null);

  const [updateData] = useUpdateProductMutation();
  const product = useAppSelector((state) => state.product.updatableProduct);

  const useFormParameter: any = {};
  if (product) {
    const values = {
      name: product.name,
      description: product.description,
      category: product.category,
      price: product.price,
      stock: product.stock,
      rating: product.rating,
    };

    useFormParameter.defaultValues = {
      name: product.name,
      description: product.description,
      category: product.category,
      price: product.price,
      stock: product.stock,
      rating: product.rating,
    };
    useFormParameter.values = values;
  }

  const { register, handleSubmit } = useForm<TFormInputs>(useFormParameter);
  useEffect(() => {
    if (product?.images.length) {
      setImagesUrl([...product.images]);
      setMainImagesUrl(product.images);
    }
  }, [product]);

  const submit = async (data: any) => {
    data.images = mainImagesUrl;
    data.price = parseFloat(data.price);
    data.stock = parseFloat(data.stock);
    data.rating = parseFloat(data.rating);

    setLoading(true);
    if (fileImages.length) {
      const responses = await Promise.all(
        fileImages.map((image: any) => {
          return axios.post(
            `https://api.imgbb.com/1/upload?key=c9c302a9d5cee64c8eb4dde4d9803027`,
            { image: image },
            {
              headers: {
                'content-type': 'multipart/form-data',
              },
            },
          );
        }),
      );

      const imgBbUrls = responses.map((res) => {
        return res.data.data.display_url;
      });

      data.images = [...data.images, ...imgBbUrls];
    }

    const res = await updateData({ id: product?._id, data });

    if (res.data?.success) {
      toastSuccess(res.data.message);
    } else {
      toastError('Something went wrong');
    }

    setLoading(false);
    closeModal('hs-full-screen-modal-2');
  };

  const openFileInput = () => {
    const fileInput = imageRef.current;
    if (fileInput) {
      fileInput.click();
    }
  };
  const handleRemoveImage = (index: number) => {
    const arrImgUrls = imagesUrl;
    const arrImgFiles = fileImages;
    const nonSpliced = [...arrImgUrls];
    arrImgUrls.splice(index, 1);
    arrImgFiles.splice(index, 1);
    setImagesUrl([...arrImgUrls]);
    setFileImages([...arrImgFiles]);
    if (mainImagesUrl.includes(nonSpliced[index])) {
      const indexOfValue = mainImagesUrl.indexOf(arrImgUrls[index]);
      const arr = [...mainImagesUrl];
      arr.splice(indexOfValue, 1);
      setMainImagesUrl([...arr]);
    }
  };

  const handleAddImages = (e: any) => {
    const images = e.target.files;
    const array = [];
    for (let i = 0; i < images.length; i++) {
      array.push(images[i]);
    }

    const urls = array.map((image: any) => URL.createObjectURL(image));
    setImagesUrl([...imagesUrl, ...urls]);
    setFileImages([...fileImages, ...array]);
  };

  return (
    <>
      <div
        id="hs-full-screen-modal-2"
        className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
      >
        <div className="hs-overlay-open:mt-0 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-10 opacity-0 transition-all max-w-full max-h-full h-full">
          <div className="flex flex-col bg-white pointer-events-auto max-w-full max-h-full h-full dark:bg-neutral-800">
            <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
              <h3 className="font-bold text-gray-800 dark:text-white"></h3>
              <button
                type="button"
                className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
                onClick={() => closeModal('hs-full-screen-modal-2')}
              >
                <span className="sr-only">Close</span>
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            </div>
            <div className="p-4 overflow-y-auto no-scrollbar::-webkit-scrollbar">
              <WidthLayout>
                <div>
                  <div>
                    <h1 className=" text-2xl  md:text-3xl text-black font-extrabold  p-5 ">
                      Update Product
                    </h1>
                    <form
                      onSubmit={handleSubmit(submit)}
                      className="  p-5 space-y-4 no-scrollbar no-scrollbar::-webkit-scrollbar overflow-y-auto "
                    >
                      <div className="grid grid-cols-1  md:grid-cols-2 gap-5">
                        <div className=" space-y-1">
                          <label
                            htmlFor="name"
                            className="text-black font-semibold"
                          >
                            Product Name:
                          </label>
                          <input
                            {...register('name')}
                            type="text"
                            id="name"
                            className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm text-black focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                            placeholder="Product name"
                          />
                        </div>
                        <div className=" space-y-1">
                          <label
                            htmlFor="category"
                            className="text-black font-semibold"
                          >
                            Product Category:
                          </label>
                          <select
                            {...register('category')}
                            id="category"
                            className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm text-black uppercase font-bold focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                          >
                            {productCategories.map((category, index) => (
                              <option value={category} key={index}>
                                {category}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className=" md:col-span-2 space-y-1">
                          <label
                            htmlFor="description"
                            className="text-black font-semibold"
                          >
                            Product Description:
                          </label>
                          <textarea
                            {...register('description')}
                            name="description"
                            id="description"
                            className="w-full p-2 rounded-lg min-h-72 border bg-gray-100"
                            placeholder="Write something about product"
                          ></textarea>
                        </div>
                      </div>
                      <div className="grid grid-cols-2  md:grid-cols-4 gap-5">
                        <div className=" space-y-1">
                          <label
                            htmlFor="price"
                            className="text-black font-semibold"
                          >
                            Product Price:
                          </label>
                          <input
                            {...register('price')}
                            type="number"
                            step="0.01"
                            id="price"
                            className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm text-black focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                            placeholder="Enter product price"
                          />
                        </div>
                        <div className=" space-y-1">
                          <label
                            htmlFor="stock"
                            className="text-black font-semibold"
                          >
                            Available Stock:
                          </label>
                          <input
                            {...register('stock')}
                            type="number"
                            id="stock"
                            className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm text-black focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                            placeholder="Enter available stock"
                          />
                        </div>
                        <div className=" space-y-1">
                          <label
                            htmlFor="rating"
                            className="text-black font-semibold"
                          >
                            Product Ratting:
                          </label>
                          <input
                            {...register('rating')}
                            type="number"
                            step={'0.10'}
                            id="rating"
                            className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm text-black focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                            placeholder="Enter Product ratting"
                          />
                        </div>
                        <div className=" space-y-1"></div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-black font-semibold">
                          Added Images:{' '}
                          <span className=" text-secondary_color">
                            {' '}
                            {imagesUrl.length}
                          </span>{' '}
                          (Double tap on image for remove )
                        </label>
                        <div className=" flex items-center gap-2 flex-wrap">
                          {imagesUrl.map((url, index) => {
                            return (
                              <div
                                onDoubleClick={() => handleRemoveImage(index)}
                                className="hover:cursor-pointer"
                                key={index}
                              >
                                <img
                                  src={url}
                                  className="w-20 h-20"
                                  alt={`image ${index + 1}`}
                                />
                                <div className=" absolute -right- -top-2"></div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="image"
                          className="text-black font-semibold"
                        >
                          Add Image:
                        </label>
                        <input
                          type="file"
                          onChange={handleAddImages}
                          multiple
                          ref={imageRef}
                          id="image"
                          className="py-3  px-4 block w-full border border-gray-300 rounded-lg text-sm text-black focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 hidden"
                          placeholder="Enter image url"
                        />
                        <div className="">
                          {' '}
                          <button
                            onClick={openFileInput}
                            type="button"
                            className=" px-4 py-2 bg-button_color text-white uppercase"
                          >
                            Add Image
                          </button>
                        </div>
                      </div>
                      <div className="text-end">
                        {' '}
                        <button
                          type="submit"
                          className=" px-6 py-2 bg-secondary_color text-white uppercase"
                        >
                          {loading ? 'Saving....' : 'Save Changes'}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </WidthLayout>
            </div>
            <div className="flex justify-end items-center gap-x-2 py-3 px-4 mt-auto border-t dark:border-neutral-700">
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                data-hs-overlay="#hs-full-screen-modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProductForm;
