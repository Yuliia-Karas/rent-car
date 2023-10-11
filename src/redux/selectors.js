export const getCars = (state) => {
    return {
        items: state.cars.items,
        isLoading: state.cars.isLoading,
        error: state.cars.error
    }
}