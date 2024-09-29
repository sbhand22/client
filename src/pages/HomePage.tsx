import FormComponent from "@/components/forms/FormComponent"

function HomePage() {
    return (
<div className="flex min-h-screen flex-col items-center justify-center gap-16">
    <div className="my-12 flex h-full min-w-full flex-col items-center justify-center">
        <div className="flex w-full items-center justify-center">
            <FormComponent />
        </div>
    </div>
</div>

    )
}

export default HomePage
