import react, { createContext, useState } from 'react'

const TableContext = createContext()

const TableProvider = ({ children }) => {

    const [searchValue, setSearchValue] = useState('')
    const [openModal, setOpenModal] = useState(false)
    // const [filterModalOpen, setFilterModalOpen] = useState(false)

    const handleOnChange = (e) => {
        console.log(e.target.value)
        setSearchValue(e.target.value)
    }

    const openAddResourceModal = () => {
        setOpenModal(true)
    }

    // const openFilterModal = () => {
    //     setFilterModalOpen(true)
    // }


    const valueToShare = {
        searchValue,
        setSearchValue,
        handleOnChange,
        openAddResourceModal,
        openModal,
        closeAddResourceModal: () => setOpenModal(false),
    }

    return (
        <TableContext.Provider value={valueToShare}>
            {children}
        </TableContext.Provider>
    )

}

export { TableProvider }
export default TableContext