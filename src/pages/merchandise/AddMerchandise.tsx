import { useEffect, useRef, useState } from 'react';
import './AddMerchandise.css'
import { toast } from 'react-toastify';
import SelectTemp, { InputTemp, TextAreaTemp } from '../../custom/form/input';
import UploadExcelIcon from '../../assets/addMerchandise/document-upload.svg'
import UploadImagesIcon from '../../assets/addMerchandise/export.svg'

import { Form, Formik } from 'formik';
import { FileData, IMerchandise, IMerchandiseImage, IMerchandiseVariant } from '../../app/models/merchandise';
import { merchandiseSchema } from './schemas';
import ArrowDownIcon from '../../assets/searchPage/arrow-down.svg';
import AddCircleIcon from '../../assets/addMerchandise/add-circle.svg';
import CloseCircleIcon from '../../assets/addMerchandise/close-circle.svg';
import useClickOutside from '../../hooks/useClickOutside';
import GreyAddIcon from '../../assets/addMerchandise/add-circle-grey.svg';
import { div } from 'framer-motion/client';






const AddMerchandise = () => {
    const [imagesSelected, setImagesSelected] = useState<IMerchandiseImage[]>([]);
    const [xlsxFileSelected, setXLSXFileSelected] = useState<FileData[]>([]);
    const [showSizeRows, setShowSizeRows] = useState(false);
    const [showColorRows, setShowColorRows] = useState(false);
    const [addNewSize, setAddNewSize] = useState(false);
    const [newSize, setNewSize] = useState('');
    const [addNewColor, setAddNewColor] = useState(false);
    const [newColor, setNewColor] = useState('');

    const [dragging,setDragging] = useState(false)
    const [selectedVariants, setSelectedVariants] = useState<IMerchandiseVariant[]>([]);
    const sizeRef = useRef<HTMLDivElement>(null);
    const sizeButtonRef = useRef<HTMLButtonElement>(null);
    const colorRef = useRef<HTMLDivElement>(null);
    const colorButtonRef = useRef<HTMLButtonElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);


    useClickOutside(sizeRef , () => setShowSizeRows(false), sizeButtonRef)
    useClickOutside(colorRef, () => setShowColorRows(false), colorButtonRef)



    const initialValues: IMerchandise = {
        category: '',
        subcategory: '',
        productName: '',
        description: '',
        images: [],
        variants: []
    }

    useEffect(() => {
      if(!showSizeRows && addNewSize){
        setAddNewSize(false)
        setNewSize('')
      }

        if (!showColorRows && addNewColor) {
            setAddNewColor(false)
            setNewColor('')
        }
    }, [showSizeRows, showColorRows])
    


    const handleChange1 = async (
        e:
            | React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLInputElement>
        , setFieldValue: any) => {
        e.preventDefault();


        if (imagesSelected.length != 6) {
            if (e.target instanceof HTMLInputElement && e.target.type === 'file') {
                const files =
                    'dataTransfer' in e && e.type === 'drop'
                        ? e.dataTransfer.files
                        : e.target.files;
                if (files) {
                    const selectedFiles = Array.from(files);
                    const invalidFileType = selectedFiles.filter(
                        (file) => file.type !== "image/png" && file.type !== "image/jpeg"
                    );

                    const largeFiles = selectedFiles.filter(
                        (file) => file.size > 10 * 1024 * 1024
                    );

                    if (invalidFileType.length > 0) {
                        toast.error("Only PNG and JPG files are allowed.");
                    }
                    if (largeFiles.length > 0) {
                        toast.error("File size should not exceed 10MB.");
                    }

                    const validFiles = selectedFiles.filter(
                        (file) => file.type === "image/png" || file.type === "image/jpeg"
                    );

                    if (validFiles.length === 0) {
                        toast.error("Only PNG and JPG files are allowed.");
                        return;
                    }

                    const base64Promises = validFiles.map((file) => {
                        return new Promise<{ fileName: string; base64: string }>((resolve, reject) => {
                            const reader = new FileReader();
                            reader.onload = () => {
                                resolve({
                                    fileName: file.name,
                                    base64: reader.result as string,
                                });
                            };
                            reader.onerror = reject;
                            reader.readAsDataURL(file);
                        });
                    });

                    try {
                        const base64Strings = await Promise.all(base64Promises);
                        setImagesSelected((prevImages) => {
                            const updatedImages = [...prevImages, ...base64Strings];
                            setFieldValue('images', updatedImages);
                            return updatedImages;
                        })
                    } catch (error) {
                        console.error('Error converting to base64:', error);
                    }
                }
            }
        } else {
            toast.error('You can only add up to 6 images')
        }
    };


    const handleChangeXLSX = async (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (e.target instanceof HTMLInputElement && e.target.type === "file") {
            const files = e.target.files;
            if (files) {
                const selectedFiles = Array.from(files).map((file) => ({
                    name: file.name,
                    file: file,
                }));
                setXLSXFileSelected(selectedFiles);
                console.log("Selected files:", selectedFiles);
            }
        }
    };

    const removeImg = (dImag: IMerchandiseImage) => {
        const newImages = imagesSelected.filter((img) => img.base64 !== dImag.base64);
        setImagesSelected(newImages);
    };

    const handleVariantChange = (vr: IMerchandiseVariant, setFieldValue: any) => {
        const repeatedValue = selectedVariants.some(variant => variant.name === vr.name);
        if (!repeatedValue){
        setSelectedVariants((prevVr) => {
            const updatedVariants = [...prevVr, vr];
            setFieldValue('variants', updatedVariants);
            return updatedVariants;
        })} else{
            toast.error('Vairant already selected')
        }
        
    };

    

    const removeVariant = (dVr: IMerchandiseVariant) => {
        const newVariants = selectedVariants.filter((vr) => vr.name !== dVr.name);
        setSelectedVariants(newVariants);
    };

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleSubmit = (values: any) => {
        console.log(values)
    }

    const categories = [
        { id: 1, name: "Electronics" },
        { id: 2, name: "Home Appliances" },
        { id: 3, name: "Gaming" },
        { id: 4, name: "Wearable Tech" }
    ];

    const subcategories = [
        { id: 1, name: "Audio Devices" },
        { id: 2, name: "Mobile Phones" },
        { id: 3, name: "Laptops" },
        { id: 4, name: "Fitness Trackers" }
    ];

    const sizes = [
        { name: 'large', value: 'size' },
        { name: 'medium', value: 'size' },
        { name: 'small', value: 'size' },
        { name: 'extra-large', value: 'size' },
        { name: 'extra-small', value: 'size' },
        { name: 'regular', value: 'size' }
    ];

    const colors = [
        { name: 'red', value: 'color' },
        { name: 'blue', value: 'color' },
        { name: 'green', value: 'color' },
        { name: 'yellow', value: 'color' },
        { name: 'black', value: 'color' },
        { name: 'white', value: 'color' },
    ];

    

  return (
      <div className={'merchPage'}>
        <div className={'merchPagewrapper'}>
          <div className={'pageHeader'}>
            <div>
              <h1 className={'heading'}>Add Your Merchandise</h1>
              <p className={'description'}>
                  Launch your product by filling out the information below
              </p>

            </div>
                  <div className={"xlsx-uploader"}>
                      <InputTemp
                          inputType={'file'}
                          onChange={(e) => { handleChangeXLSX(e); }}
                          defaultValue={''}
                          accept=".xlsx"
                          multiple={false}
                          ref={fileInputRef}
                          classNames="xlsx-input"
                      />
                      <button onClick={handleButtonClick} type="button" className="xlsx-upload-button">
                          <p className="plus-icon"><UploadExcelIcon /> Upload xlsx file</p>
                      </button>
                  </div>

          </div>

          <div className="merchandiseForm">
                  <Formik
                      initialValues={initialValues}
                      onSubmit={handleSubmit}
                      validationSchema={merchandiseSchema}
                  >
                      {({ handleSubmit, handleChange, handleBlur, errors, touched, setFieldValue, isValid, dirty, resetForm, values, isSubmitting }) => {

                          useEffect(() => {
                              setFieldValue('images', [...imagesSelected])
                          }, [imagesSelected])
                          useEffect(() => {
                              setFieldValue('variants', [...selectedVariants])
                          }, [selectedVariants])


                          return (
                              <Form onSubmit={handleSubmit} autoComplete="off" className={'form'}>
                                <div className='topForms'>
                                    <div className="inputformsVariants">
                                        <div className='inputForms'>
                                            <InputTemp
                                                id={'productName'}
                                                name={'productName'}
                                                //   placeholder={'Product Name'}
                                                classNames='custom-inputs'
                                                inputType={'text'}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                label={'Product Name'}
                                                errors={errors}
                                                touched={touched}
                                                defaultValue={''}
                                            />
                                            <SelectTemp
                                                id={'category'}
                                                name={'category'}
                                                inputType={'text'}
                                                classNames="custom-inputs custom-selects"
                                                data={categories}
                                                svgIconComponent={<ArrowDownIcon />}
                                                errors={errors}
                                                touched={touched}
                                                value={values.category || ''}
                                                label="Category"
                                                onClick={(row) => {
                                                    setFieldValue('category', row.name);
                                                }}
                                                onChange={(e) => {
                                                    handleChange;
                                                }}
                                            />

                                            <SelectTemp
                                                id={'subcategory'}
                                                name={'subcategory'}
                                                inputType={'text'}
                                                classNames="custom-inputs custom-selects"
                                                data={subcategories}
                                                errors={errors}
                                                touched={touched}
                                                value={values.subcategory || ''}
                                                label="Sub-Category"
                                                onClick={(row) => {
                                                    setFieldValue('subcategory', row.name);
                                                }}
                                                onChange={(e) => {
                                                    handleChange;
                                                }}
                                                svgIconComponent={<ArrowDownIcon />}

                                            />
                                            <TextAreaTemp
                                                id={'description'}
                                                name={'description'}
                                                onBlurT={handleBlur}
                                                onChangeT={handleChange}
                                                label={'Description'}
                                                errors={errors}
                                                touched={touched}
                                                classNames='custom-textarea' 
                                                maxLength={500}/>

                                                

                                        </div>

                                          <div className="variants">
                                              <h1 className="header">Variant <span>(if applicable)</span></h1>
                                              <div className="variantOptions">
                                                <div ref={sizeRef} className="scOptions">
                                                    <p className='scHeader'>Size</p>
                                                    <div className='scSelectedField'>
                                                        <div className='selectedVariants'>
                                                              {selectedVariants?.filter((vr)=> vr.value.toLocaleLowerCase() === 'size')?.map((variant, index) => {
                                                            if(variant.value.toLowerCase() === 'size')
                                                            return(
                                                                <div key={index} className='variant'> {variant.name.charAt(0).toUpperCase() + variant.name.slice(1)}
                                                                    <button type='button' onClick={() => removeVariant(variant)}><CloseCircleIcon /></button></div>
                                                            )
                                                            return null
                                                        })}
                                                        </div>
                                                          <button ref={sizeButtonRef} type='button' className='addVariant' onClick={() => setShowSizeRows(!showSizeRows)}><AddCircleIcon/> Add Variant</button>

                                                    </div>
                                                      <div
                                                          data-visible={showSizeRows ? 'true' : 'false'}
                                                          id="sizes-list-1"
                                                          className="dropdown-list"
                                                      >
                                                          {showSizeRows && (<ul>
                                                              {sizes?.map((row, index: number) => (
                                                                  <li key={index}>
                                                                      <button
                                                                          type="button"
                                                                          onClick={() => {
                                                                              handleVariantChange(row, setFieldValue),
                                                                                  setAddNewSize(false)
                                                                                  setNewSize('')
                                                                          }}
                                                                      >
                                                                          {row?.name}
                                                                      </button>
                                                                  </li>
                                                              ))}

                                                              <li>{addNewSize ? 
                                                                <div className='addNew'>
                                                                    <input 
                                                                    name='newSize'
                                                                    value={newSize}
                                                                    onChange={(e) => {
                                                                        e.preventDefault()
                                                                        setNewSize(e.target.value)
                                                                    }}
                                                                    />

                                                                      <button onClick={() => {
                                                                        if(newSize != ''){
                                                                          handleVariantChange({name:newSize, value: 'size'}, setFieldValue)} setNewSize(''), setAddNewSize(false)
                                                                      }}><GreyAddIcon /> Add</button>

                                                                </div> :<button onClick={() => setAddNewSize(true)} className='liAddnew'><GreyAddIcon /> Add new</button>}</li>
                                                          </ul>)}
                                                      </div>
                                                </div>
                                                  <div ref={colorRef} className="scOptions">
                                                      <p className='scHeader'>Color</p>
                                                      <div className='scSelectedField'>
                                                        <div className='selectedVariants'>
                                                              {selectedVariants?.filter((vr) => vr.value.toLocaleLowerCase() === 'color')?.map((variant, index) => {
                                                                  if (variant.value.toLowerCase() === 'color')
                                                                      return (
                                                                          <div key={index} className='variant'> {variant.name.charAt(0).toUpperCase() + variant.name.slice(1)}
                                                                              <button type='button' onClick={() => removeVariant(variant)}><CloseCircleIcon /></button></div>
                                                                      )
                                                                  return null
                                                              })}
                                                        </div>
                                                          <button ref={colorButtonRef} type='button' className='addVariant' onClick={() => setShowColorRows(!showColorRows)}><AddCircleIcon /> Add Variant</button>
                                                      </div>

                                                      <div
                                                          data-visible={showColorRows ? 'true' : 'false'}
                                                          id="colors-list-1"
                                                          className="dropdown-list"
                                                      >
                                                          {showColorRows && (<ul>
                                                              {colors?.map((row, index: number) => (
                                                                  <li key={index}>
                                                                      <button
                                                                          type="button"
                                                                          onClick={() => {
                                                                              handleVariantChange(row, setFieldValue)
                                                                              setAddNewColor(false)
                                                                              setNewColor('')
                                                                          }}
                                                                      >
                                                                          {row?.name}
                                                                      </button>
                                                                  </li>
                                                              ))}
                                                              <li>{addNewColor ?
                                                                  <div className='addNew'>
                                                                      <input
                                                                          name='newColor'
                                                                          value={newColor}
                                                                          onChange={(e) => {
                                                                              e.preventDefault()
                                                                              setNewColor(e.target.value)
                                                                          }}
                                                                      />

                                                                      <button onClick={() => {
                                                                        if(newColor != ''){
                                                                          handleVariantChange({ name: newColor, value: 'color' }, setFieldValue)}
                                                                          setNewColor('')
                                                                          setAddNewColor(false)
                                                                      }}><GreyAddIcon /> Add</button>

                                                                  </div> : <button onClick={() => setAddNewColor(true)} className='liAddnew'><GreyAddIcon /> Add new</button>}</li>
                                                          </ul>)}
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>

                                    </div>

                                    <div className="productImages">
                                          <div className="image-uploader-1">
                                              <p className='productPhotoshd'>Product Photos</p>
                                              <div className="image-uploader-btn">
                                                  <input
                                                      id={'images'}
                                                      name={'images'}
                                                      type={'file'}
                                                      onBlur={handleBlur}
                                                      onChange={(e) => { handleChange1(e, setFieldValue); }}
                                                      onDrop={(e) => { handleChange1(e, setFieldValue); }}
                                                      onDragOver={(event) => { event.preventDefault(); setDragging(true)}}
                                                      onDragLeave={() => { setDragging(false)}}
                                                      defaultValue={''}
                                                      accept="image/*"
                                                      multiple={true}
                                                      className='file-input'
                                                  />
                                                  <button  style={dragging ? { backgroundColor: '#f4fbe8'}: {}} type="button" className="upload-button">
                                                      <UploadImagesIcon/>
                                                      <p className="plus-icon">
                                                          <span>Click to upload</span> or drag and drop
                                                    </p>
                                                      <p>Max 10mb file size, only jpeg and png files</p>
                                                  </button>
                                              </div>

                                             {imagesSelected.length >= 1 && <div className="preview-cont">
                                                  {imagesSelected.map((img: IMerchandiseImage, index: number) => (
                                                      <div key={index}>
                                                          <button onClick={() => removeImg(img)} type="button">x</button>
                                                          <img src={img.base64} alt={`preview ${index}`} className='preview-img' />
                                                      </div>
                                                  ))}
                                              </div>}

                                          </div>
                                          {(errors['images'] && touched['images']) ? (
                                              <p className="error-message" style={{color:'red'}}>{String(errors['images'])}</p>
                                          ) : null}

                                                  <div className="discardSubmitBtn">

                                            <button className='discardBtn' type='button'>Discard</button>
                                            <button className='submitBtn' type='submit'>Add Product</button>
                                                  </div>
                                    </div>

                                </div>
                              </Form>
                          )
                      }}
                  </Formik>
          </div>

        </div>
      </div>

  )
}

export default AddMerchandise