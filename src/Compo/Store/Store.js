const MAX_STORAGE_SIZE = 1024 * 1024; // Set your desired maximum storage size in bytes
const STORAGE_SIZE_KEY = 'storageSize';

const getStorageSize = () => {
    const storedSize = localStorage.getItem(STORAGE_SIZE_KEY);
    return storedSize ? parseInt(storedSize, 10) : 0;
};


const updateStorageSize = (newSize) => {
    localStorage.setItem(STORAGE_SIZE_KEY, newSize.toString());
};

const StoreData = () => {
    const storedDonat = localStorage.getItem('donate');
    if (storedDonat) {
        return JSON.parse(storedDonat);
    }
    return [];
};

const SaveStoreData = (id) => {
    const saveData = StoreData();
    const exists = saveData.find((existingId) => existingId === id);

    if (!exists) {
        saveData.push(id);
        const newStorageSize = getStorageSize() + JSON.stringify(saveData).length * 2;

        // Check if the new size exceeds the maximum size
        if (newStorageSize <= MAX_STORAGE_SIZE) {
            localStorage.setItem('donate', JSON.stringify(saveData));
            updateStorageSize(newStorageSize);

            // Calculate the percentage
            const percentageUsed = (newStorageSize / MAX_STORAGE_SIZE) * 100;
           
        }
    }
};

export { StoreData, SaveStoreData, getStorageSize };
