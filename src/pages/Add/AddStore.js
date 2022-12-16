import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { addStore } from 'services/StoresAPI';

function AddStore() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = useCallback(
    async ({ name, country, province, city, street }, e) => {
      e.preventDefault();
      const data = { name, location: { country, province, city, street } };
      console.log(data);
      await addStore(data);
    },
    []
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="overflow-hidden w-full h-full">
        <div className="px-4 py-5 sm:p-6 w-full h-full">
          <div className="grid grid-cols-4 gap-6 h-full">
            {/* name */}
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="store-name" className="input-label">
                Name
              </label>
              <input
                type="text"
                name="store-name"
                id="store-name"
                autoComplete="store-name"
                className="input-text"
                {...register('name')}
              />
            </div>

            {/* country */}
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="country" className="input-label">
                Country
              </label>
              <input
                type="text"
                name="country"
                id="country"
                autoComplete="country"
                className="input-text"
                {...register('country')}
              />
            </div>

            {/* province */}
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="province" className="input-label">
                Province
              </label>
              <input
                type="text"
                name="province"
                id="province"
                autoComplete="province"
                className="input-text"
                {...register('province')}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="city" className="input-label">
                City
              </label>
              <input
                type="text"
                name="city"
                id="city"
                autoComplete="city"
                className="input-text"
                {...register('city')}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="street" className="input-label">
                Street
              </label>
              <input
                type="text"
                name="street"
                id="street"
                autoComplete="street"
                className="input-text"
                {...register('street')}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <button type="submit" className="btn-submit">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default AddStore;
