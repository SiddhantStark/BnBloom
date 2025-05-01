import { FormControl, FormField, FormItem } from '@/components/ui/form'
import Icon from '@/components/ui/icon'
import { Popover, PopoverContent } from '@/components/ui/popover'
import { PopoverTrigger } from '@radix-ui/react-popover'
import dayjs from 'dayjs'
import React from 'react'

const DateSelectInput = ({form}) => {
  return (
    <Popover>
        <FormField
          control={form.control}
          name='date'
          render={({ field }) => (
            <>
            <PopoverTrigger asChild>
                <FormItem className="px-4 py-2 rounded bg-background h-full lg:min-w-[300px] lg:flex-auto">
                    <FormControl>
                        <div role='button'>
                            <Icon icon="calendar" size="24" className="text-muted-foreground shrink-8" />
                        </div>
                        <div className='flex items-center flex-1 gap-2 px-2'>
                            <p className="text-sm">
                                {field?.value?.from ? dayjs(field.value.from).format('ddd D MMM') : 'Check-in date'}
                            </p>
                            <span aria-hidden>-</span>
                            <p className="text-sm">
                                {field?.value?.to ? dayjs(field.value.to).format('ddd D MMM') : 'Check-out date'}
                            </p>
                        </div>
                    </FormControl>
                </FormItem>
            </PopoverTrigger>
            <PopoverContent>

            </PopoverContent>
            </>
          )}
          />
    </Popover>
  )
}

export default DateSelectInput
