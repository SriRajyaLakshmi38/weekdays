import Select from "react-select";
import styles from "./Filter.module.css";

const minExp = [
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
  { value: 6, label: "6" },
  { value: 7, label: "7" },
  { value: 8, label: "8" },
  { value: 9, label: "9" },
  { value: 10, label: "10" },
];
const location = [
  { value: "mumbai", label: "Mumbai" },
  { value: "chennai", label: "Chennai" },
  { value: "delhi ncr", label: "Delhi NCR" },
  { value: "bangalore", label: "Bangalore" },
];
const jobRole = [
  { value: "ios", label: "IOS" },
  { value: "android", label: "Android" },
  { value: "tech lead", label: "Tech Lead" },
  { value: "front end", label: "Front End" },
  { value: "back end", label: "Back End" },
];

const minJdSalary = [
  { value: 1, label: "1" },
  { value: 10, label: "10" },
  { value: 20, label: "20" },
  { value: 30, label: "30" },
  { value: 40, label: "40" },
  { value: 50, label: "50" },
  { value: 60, label: "60" },
  { value: 70, label: "70" },
  { value: 80, label: "80" },
  { value: 90, label: "90" },
  { value: 100, label: "100" },
];
const companyNames = [
  { value: "lg", label: "LG" },
  { value: "sony", label: "Sony" },
  { value: "adobe", label: "Adobe" },
  { value: "hp", label: "HP" },
  { value: "ebay", label: "Ebay" },
  { value: "tencent", label: "Tencent" },
  { value: "apple", label: "Apple" },
  { value: "asus", label: "Asus" },
  { value: "intel", label: "Intel" },
  { value: "rakuten", label: "Rakuten" },
  { value: "samsung", label: "Samsung" },
  { value: "dell", label: "Dell" },
  { value: "dropbox", label: "Drop Box" },
  { value: "cisco", label: "Cisco" },
  { value: "oracle", label: "Oracle" },
  { value: "baidu", label: "Baidu" },
  { value: "amazon", label: "Amazon" },
  { value: "olympus", label: "Olympus" },
  { value: "alibaba", label: "Alibaba" },
  { value: "gopro", label: "Go Pro" },
  { value: "twitter", label: "Twitter" },
  { value: "zte", label: "Zte" },
  { value: "netflix", label: "Netflix" },
  { value: "mastercard", label: "Master Card" },
  { value: "facebook", label: "Facebook" },
  { value: "ibm", label: "IBM" },
  { value: "intel", label: "Intel" },
  { value: "google", label: "Google" },
  { value: "huawei", label: "Huawei" },
  { value: "pandora", label: "Pandora" },
  { value: "nikon", label: "Nikon" },
  { value: "spotify", label: "Spotify" },
  { value: "paypal", label: "Paypal" },
  { value: "visa", label: "Visa" },
];
const remoteOptions = [
  { value: "remote", label: "Remote" },
  { value: "onsite", label: "In-office" },
];

export default function Filters() {
  return (
    <>
      <div className={styles.filtersContainer}>
        <Select
          isMulti
          backspaceRemovesValue
          blurInputOnSelect
          placeholder="Minimum Experience"
          options={minExp}
        />
        <Select
          isMulti
          backspaceRemovesValue
          blurInputOnSelect
          placeholder="Company Name"
          options={companyNames}
        />
        <Select
          isMulti
          backspaceRemovesValue
          blurInputOnSelect
          placeholder="Location"
          options={location}
        />
        <Select
          isMulti
          backspaceRemovesValue
          blurInputOnSelect
          placeholder="Role"
          options={jobRole}
        />
        <Select
          backspaceRemovesValue
          blurInputOnSelect
          placeholder="Minimum Base Pay"
          options={minJdSalary}
        />
        <Select
          backspaceRemovesValue
          blurInputOnSelect
          placeholder="Remote"
          options={remoteOptions}
        />
      </div>
    </>
  );
}
