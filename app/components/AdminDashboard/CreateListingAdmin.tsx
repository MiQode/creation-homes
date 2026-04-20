'use client';

import React, { useMemo, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { categories } from '../navbar/Categories';
import CategoryInput from '../inputs/CategoryInput';
import DistrictSelect from '../inputs/DistrictSelect';
import dynamic from 'next/dynamic';
import Counter from '../inputs/Counter';
import ImageUpload from '../inputs/ImageUpload';
import Input from '../inputs/Input';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { Loader2 } from 'lucide-react';

interface CreateListingAdminProps {
  onSuccess?: () => void;
}

const CreateListingAdmin: React.FC<CreateListingAdminProps> = ({ onSuccess }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      category: '',
      location: null,
      guestCount: 1,
      roomCount: 1,
      bathroomCount: 1,
      imageSrc: '',
      price: 1,
      title: '',
      description: '',
    },
  });

  const category = watch('category');
  const location = watch('location');
  const guestCount = watch('guestCount');
  const roomCount = watch('roomCount');
  const bathroomCount = watch('bathroomCount');
  const imageSrc = watch('imageSrc');

  const Map = useMemo(
    () =>
      dynamic(() => import('../Map'), {
        ssr: false,
      }),
    [location]
  );

  const setCustomValue = (id: string, value: unknown) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (!data.category) return toast.error('Please select a category');
    if (!data.location) return toast.error('Please select a location');
    if (!data.imageSrc) return toast.error('Please upload an image');
    if (!data.title) return toast.error('Please add a title');
    if (!data.description) return toast.error('Please add a description');

    setIsLoading(true);

    axios
      .post('/api/listings', data)
      .then(() => {
        toast.success('Listing Created Successfully!');
        router.refresh();
        reset();
        if (onSuccess) {
          onSuccess();
        }
      })
      .catch(() => {
        toast.error('Something went wrong.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 lg:p-8 max-w-5xl mx-auto mb-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Create New Listing</h2>
        <p className="text-gray-600 mt-1">Publish a new property to the marketplace.</p>
      </div>

      <div className="space-y-12">
        {/* Category Section */}
        <section>
          <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
            1. Property Category
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-h-[300px] overflow-y-auto p-1">
            {categories.map((item) => (
              <div key={item.label} className="col-span-1">
                <CategoryInput
                  onClick={(category) => setCustomValue('category', category)}
                  selected={category === item.label}
                  label={item.label}
                  icon={item.icon}
                />
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Details */}
          <div className="space-y-10">
            {/* Info Section */}
            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                2. Property Details
              </h3>
              <div className="space-y-6 bg-gray-50 p-6 rounded-xl border border-gray-100">
                <Input
                  id="title"
                  label="Title"
                  disabled={isLoading}
                  register={register}
                  errors={errors}
                  required
                />
                <Input
                  id="description"
                  label="Description"
                  disabled={isLoading}
                  register={register}
                  errors={errors}
                  required
                />
                <Input
                  id="price"
                  label="Price per Night (UGX)"
                  formatPrice
                  type="number"
                  disabled={isLoading}
                  register={register}
                  errors={errors}
                  required
                />
              </div>
            </section>

            {/* Rooms Section */}
            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                3. Rooms & Capacity
              </h3>
              <div className="space-y-4 bg-gray-50 p-6 rounded-xl border border-gray-100">
                <Counter
                  title="Guests"
                  subtitle="How many guests do you allow?"
                  value={guestCount}
                  onChange={(value) => setCustomValue('guestCount', value)}
                />
                <hr className="border-gray-200" />
                <Counter
                  title="Rooms"
                  subtitle="How many rooms do you have?"
                  value={roomCount}
                  onChange={(value) => setCustomValue('roomCount', value)}
                />
                <hr className="border-gray-200" />
                <Counter
                  title="Bathrooms"
                  subtitle="How many bathrooms do you have?"
                  value={bathroomCount}
                  onChange={(value) => setCustomValue('bathroomCount', value)}
                />
              </div>
            </section>
          </div>

          {/* Right Column: Location & Image */}
          <div className="space-y-10">
            {/* Image Upload */}
            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                4. Property Image
              </h3>
              <div className="h-64 rounded-xl overflow-hidden shadow-sm border border-gray-200">
                <ImageUpload
                  value={imageSrc}
                  onchange={(value) => setCustomValue('imageSrc', value)}
                />
              </div>
            </section>

            {/* Location Section */}
            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                5. Location
              </h3>
              <div className="space-y-4">
                <DistrictSelect
                  value={location}
                  onChange={(value) => setCustomValue('location', value)}
                />
                <div className="h-[250px] rounded-xl overflow-hidden shadow-sm border border-gray-200">
                  <Map center={location?.latlng} />
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Submit */}
        <div className="pt-6 border-t border-gray-200 flex justify-end">
          <button
            onClick={handleSubmit(onSubmit)}
            disabled={isLoading}
            className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md disabled:opacity-70 disabled:cursor-not-allowed font-semibold text-lg"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Publishing...
              </>
            ) : (
              'Publish Listing'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateListingAdmin;
