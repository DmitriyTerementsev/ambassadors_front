// import '../InputDate/InputDate.css';
// import './InputDateRange';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import dayjs from 'dayjs';
// import { useState } from 'react';
// import 'dayjs/locale/ru';
// import CalendarIcon from '../../assets/CalendarIcon.svg?react';
// import updateLocale from 'dayjs/plugin/updateLocale';
// import { InputDateProps } from '../InputDate/InputDate';
// import { LicenseInfo } from '@mui/x-date-pickers-pro';

// LicenseInfo.setLicenseKey(
//   'x0jTPl0USVkVZV0SsMjM1kDNyADM5cjM2ETPZJVSQhVRsIDN0YTM6IVREJ1T0b9586ef25c9853decfa7709eee27a1e'
// );

// export default function InputDateRange({
//   label,
//   width,
//   height,
// }: InputDateProps) {
//   dayjs.extend(updateLocale);
//   dayjs.updateLocale('ru', {
//     formats: { ll: 'D MMM YYYY' },
//   });
//   const [firstValue, setFirstValue] = useState<dayjs.Dayjs | null>(dayjs());
//   const [secondValue, setSecondValue] = useState<dayjs.Dayjs | null>(dayjs());

//   //console.log(firstValue, secondValue);

//   return (
//     <div className='date'>
//       <p className='date__label'>{label}</p>
//       <div className='inputs'>
//         <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='ru'>
//           <DemoContainer
//             components={['DatePicker']}
//             sx={{
//               '& .MuiStack-root': { width: width },
//               '& .MuiInputBase-root': {
//                 width: width,
//                 height: height,
//                 flexDirection: 'row-reverse',
//                 gap: '8px',
//                 padding: '0 0 0 8px',
//               },
//               '& .MuiInputBase-input': {
//                 minWidth: '80px',
//                 height: '20px',
//                 padding: '0 0 0 0',
//                 fontSize: '14px',
//                 fontWeight: '400',
//                 lineHeight: '20px',
//                 letterSpacing: '0em',
//                 textAlign: 'left',
//               },
//               '& .MuiInputAdornment-root': {
//                 width: '24px',
//                 margin: '0',
//               },
//               '& .MuiInputAdornment-root:target': {
//                 border: 'none',
//               },
//               '& .MuiButtonBase-root': {
//                 width: '24px',
//                 height: '24px',
//                 padding: '0',
//                 margin: '0',
//                 borderRadius: '0',
//                 border: '0',
//               },
//             }}
//           >
//             <DatePicker
//               format='ll'
//               value={firstValue}
//               onChange={(e) => setFirstValue(e)}
//               slots={{
//                 openPickerIcon: CalendarIcon,
//               }}
//             />
//           </DemoContainer>
//         </LocalizationProvider>
//         <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='ru'>
//           <DemoContainer
//             components={['DatePicker']}
//             sx={{
//               '& .MuiStack-root': { overflow: 'hidden' },
//               '& .MuiInputBase-root': {
//                 width: width,
//                 height: height,
//                 flexDirection: 'row-reverse',
//                 gap: '8px',
//                 padding: '0 0 0 8px',
//               },
//               '& .MuiInputBase-input': {
//                 minWidth: '80px',
//                 height: '20px',
//                 padding: '0 0 0 0',
//                 fontSize: '14px',
//                 fontWeight: '400',
//                 lineHeight: '20px',
//                 letterSpacing: '0em',
//                 textAlign: 'left',
//               },
//               '& .MuiInputAdornment-root': {
//                 width: '24px',
//                 margin: '0',
//               },
//               '& .MuiInputAdornment-root:target': {
//                 border: 'none',
//               },
//               '& .MuiButtonBase-root': {
//                 width: '24px',
//                 height: '24px',
//                 padding: '0',
//                 margin: '0',
//                 borderRadius: '0',
//                 border: '0',
//               },
//             }}
//           >
//             <DatePicker
//               format='ll'
//               value={secondValue}
//               onChange={(e) => setSecondValue(e)}
//               slots={{
//                 openPickerIcon: CalendarIcon,
//               }}
//             />
//           </DemoContainer>
//         </LocalizationProvider>
//       </div>
//     </div>
//   );
// }


import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { LicenseInfo } from '@mui/x-date-pickers-pro';
LicenseInfo.setLicenseKey(
  'e0d9bb8070ce0054c9d9ecb6e82cb58fTz0wLEU9MzI0NzIxNDQwMDAwMDAsUz1wcmVtaXVtLExNPXBlcnBldHVhbCxLVj0y'
);
export default function InputDateRange() {
  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DemoContainer
      components={['DateRangePicker', 'DateRangePicker', 'DateRangePicker']}
    >
      <DemoItem label="1 calendar" component="DateRangePicker">
        <DateRangePicker calendars={1} />
      </DemoItem>
      <DemoItem label="2 calendars" component="DateRangePicker">
        <DateRangePicker calendars={2} />
      </DemoItem>
    </DemoContainer>
  </LocalizationProvider>
  );
}
