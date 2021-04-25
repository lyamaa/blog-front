
export default function PostLoading(Component) {
    return function PostloadingComponent({isLoading, ...props}){
        if(!isLoading) return <Component {...props} />
        return (
            <p style={{ fontSize: '25px'}}>
                Wait Loading .....
            </p>
        )
    }
}