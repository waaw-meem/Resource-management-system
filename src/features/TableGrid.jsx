import SearchField from '../components/common/SearchField'
import PrimaryHeader from '../components/common/PrimaryHeader'
import Button from '../components/common/Button'
import { AddUserDrawer } from '../components/modal/AddUserDrawer'
import useTableContext from '../hooks/useTableContext'

import AddIcon from "../assets/svg/document-add.svg"
import FilterIcon from "../assets/svg/filter.svg"

const TableGrid = () => {

    const {
        searchValue,
        handleOnChange,
        openAddResourceModal,
        closeAddResourceModal,
        openModal } = useTableContext()


    return (
        <>
            <PrimaryHeader title="Resources" />
            <div className="table-grid p-4 bg-light mt-4 rounded-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <SearchField
                        placeholder="Search by Attribute"
                        onChange={handleOnChange}
                        value={searchValue} />

                    <div className='d-flex align-items-center gap-2 button-container'>
                        <Button className="d-flex align-items-center gap-2 rounded-1"
                            onClick={() => openAddResourceModal()}>
                            Add New
                            <img src={AddIcon} alt="Add" />
                        </Button>

                        <Button variant="secondary" className="rounded-1" onClick={() => console.log("Filter button clicked")}>
                            <img src={FilterIcon} alt="Filter" />
                        </Button>
                    </div>
                </div>

                <AddUserDrawer
                    open={openModal}
                    onClose={closeAddResourceModal}
                />
            </div>
        </>
    )
}

export default TableGrid