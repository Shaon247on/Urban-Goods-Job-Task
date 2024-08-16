import React from 'react';
import { useForm } from 'react-hook-form';

const SortAndFilter = ({filters, onChange}) => {
    const {
        register,
        handleSubmit,
        reset
      } = useForm({
        defaultValues: filters
      })

      const onSubmit = (data) => {
        onchange(data)
      }

      const handleReset=()=>{
        reset()
        onchange({})
      }
    return (
        <div>
            Filter
        </div>
    );
};

export default SortAndFilter;