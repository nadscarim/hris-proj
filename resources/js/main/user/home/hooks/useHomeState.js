import useShallowEqualSelector from '../../../../shared/hooks/useShallowEqualSelector'

const useHomeState = (key) => useShallowEqualSelector((state) => state.Home[key])

export default useHomeState
