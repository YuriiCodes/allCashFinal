import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import * as z from 'zod';
import {Button, Flex} from "@tremor/react";

const schema = z.object({
    balanceId: z.string().min(1, {message: 'Required'}),
    amount: z.number().min(1, {message: 'Required'}),
});

const NewExpenseForm = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        resolver: zodResolver(schema),
    });

    return (
        <form onSubmit={handleSubmit((d) => console.log(d))}>
            <div className={"flex flex-col gap-4"}>
                <div>
                    <label htmlFor="balanceId"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pick Your Balance</label>
                <select
                    className={"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}
                    {...register('balanceId')}
                    id={"balanceId"}
                >
                    <option disabled={true}>Pick You Balance</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
                </div>
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/*@ts-ignore*/}
                {errors.name?.message && <p>{errors.name?.message}</p>}



                <label htmlFor="expenseAmount"
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Expense Ammount</label>
                <input
                    id="expenseAmount"
                className={"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}
                    type="number" {...register('amount', {valueAsNumber: true})} />
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/*@ts-ignore*/}
                {errors.amount?.message && <p>{errors.amount?.message}</p>}
                <Button type="submit">
                    Add Expense
                </Button>

            </div>
        </form>
    );
};

export default NewExpenseForm;