import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useCreateHotelForm } from './useCreateHotelForm'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import TokenInput from '@/components/ui/token-input';
import { ButtonWithIcon } from '@/components/ui/button';

const HotelImage = ({photo}) => {
  return (
    <div className="relative">
          <img
            src={photo}
            alt="Hotel image"
            width={96}
            height={96}
            className="object-cover size-24 rounded-md"
          />
          <Button
            size={'icon'}
            type="button"
            variant={'destructive'}
            className={'absolute size-6 rounded-full -top-2 -right-2'}
          >
            <Icon icon={'close'} size="14" />
          </Button>
    </div>
  );
}

const CreateHotelForm = () => {
  
    const { form, createHotelHandler, pending } = useCreateHotelForm()

    return (
      <div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(createHotelHandler)}
            className="space-y-6"
          >
            <div className="flex gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="{flex-1}">
                    <FormLabel>Hotel Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="{flex-1}">
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="photos"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hotel Photos</FormLabel>
                  <FormControl>
                    <Input
                      type={"file"}
                      multiple
                      accept="image/*"
                      ref={field?.ref}
                      className={"hidden"}
                      onChange={(e) => {
                        if (!e.target.files || e.target.files.length === 0) {
                          return;
                        }
                        const files = Array.from(e.target.files).map((file) =>
                          URL.createObjectURL(file)
                        );
                        field.onChange(files);
                      }}
                    />
                  </FormControl>
                  {field.value &&
                    field.value.length > 0 &&
                    field?.value?.map((photo, index) => (
                      <HotelImage key={index} photo={photo} />
                    ))}
                  <FormLabel className="flex items-center justify-center w-24 h-24 border-2 border-dashed rounded-md cursor-pointer group hover:bg-secondary ">
                    <Icon
                      icon="addImage"
                      size="28"
                      className="text-muted-foreground group-hover:text-primary"
                      strokeWidth={1.5}
                    />
                  </FormLabel>
                </FormItem>
              )}
            />

            <div className="flex gap-6">
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Hotel Address</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex gap-6">
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Contact Number</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        onChange={(e) =>
                          field.onChange(e.target.value.replace(/[^0-9+]/, ""))
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <ButtonWithIcon
                icon={"save"}
                className="px-8 h-11"
                disabled={pending}
                isLoading={pending} 
                iconProps={undefined} 
                spinnerProps={undefined}                        
            >
              Create Hotel
            </ButtonWithIcon>
          </form>
        </Form>
      </div>
    );
}

export default CreateHotelForm
