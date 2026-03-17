import axios from "axios";

const BASE_URL = "https://blinkit-analytics-backend-production.up.railway.app/analytics";

export const getTotalOrders = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/total-orders`);
        return response.data;
    }catch(error){
        console.log(error);
        throw error;
    }
};

export const getTotalOrdersPerCity = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/orders-per-city`);
        return response.data;
    }catch(e){
        console.error(e);
        throw e;
    }
}

export const getCancellationRate = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/cancellation-rate`);
        return response.data;
    }catch(e){
        console.error(e);
        throw e;
    }
}

export const getAvgTimePerCity = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/avg-time-per-city`);
        return response.data;
    }catch(e){
        console.error(e);
        throw e;
    }
}

export const getOrderPerDay = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/orders-per-day`);
        return response.data;
    }catch(e){
        console.error(e);
        throw e;
    }
}

export const getAvgOrderValue = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/avg-order-value`);
        return response.data;
    }catch(e){
        console.error(e);
        throw e;
    }
}

export const getDeliveryTImeByHour = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/peak-delivery-hours`);
        return response.data;
    }catch(e){
        console.error(e);
        throw e;
    }
}   

export const getRevenuePerCity = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/revenue-per-city`);
        return response.data;
    }catch(e){
        console.error(e);
        throw e;
    }
}

export const getCancellationPerCity = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/cancellation-per-city`);
        return response.data;
    }catch(e){
        console.error(e);
        throw e;
    }
}

export const getTop5Riders = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/top-5-riders`);
        return response.data;
    }catch(e){
        console.error(e);
        throw e;
    }
}

export const getOrderPerHour = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/orders-per-hour`);
        return response.data;
    }catch(e){
        console.error(e);
        throw e;
    }
}

export const getOrderPerCategory = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/orders-per-category`);
        return response.data;
    }catch(e){
        console.error(e);
        throw e;
    }
}

export const getTotalRevenue = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/total-revenue`);
        return response.data;
    }catch(e){
        console.error(e);
        throw e;
    }
}

export const getTotalRiders = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/total-riders`);
        return response.data;
    }catch(e){
        console.error(e);
        throw e;
    }
}

export const getAvgDeliveryTime = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/avg-delivery-time`);
        return response.data;
    }catch(e){
        console.error(e);
        throw e;
    }
}

export const getOrderPerPaymentMethod = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/orders-per-payment-method`);
        return response.data;
    }catch(e){
        console.error(e);
        throw e;
    }
}

export const getZoneWiseDistribution = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/zone-wise-distribution`);
        return response.data;
    }catch(e){
        console.error(e);
        throw e;
    }
}

export const getRidersPerCity = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/rider-per-city`);
        return response.data;
    }catch(e){
        console.error(e);
        throw e;
    }
}

export const getRiderUtilization = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/rider-utilization`);
        return response.data;
    }catch(e){
        console.error(e);
        throw e;
    }
}

export const getRepeatCustomers = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/repeat-customers`);
        return response.data;
    }catch(e){
        console.error(e);
        throw e;
    }
}
