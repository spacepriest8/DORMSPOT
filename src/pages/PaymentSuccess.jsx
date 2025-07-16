// import React from 'react';
// import { Box, Typography, Button, Grid, Paper } from '@mui/material';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

// const PaymentSuccess = ({ bookingDetails, onContinue, onDownload }) => {
//   // bookingDetails expected format:
//   // {
//   //   hostelName: 'DormSpot Hostel',
//   //   location: 'New York',
//   //   duration: '30 days',
//   //   checkInDate: 'June 1, 2025',
//   //   amountPaid: '$450'
//   // }

//   return (
//     <Box
//       sx={{
//         maxWidth: 600,
//         mx: 'auto',
//         mt: 10,
//         p: 3,
//         textAlign: 'center',
//         display: 'flex',
//         flexDirection: 'column',
//         gap: 3,
//       }}
//     >
//       <CheckCircleOutlineIcon sx={{ fontSize: 80, color: 'green', mx: 'auto' }} />
//       <Typography variant="h4" component="h1" gutterBottom>
//         Payment Successful!
//       </Typography>
//       <Typography variant="body1" sx={{ mb: 3 }}>
//         Thank you for your payment. Your transaction has been completed successfully.
//       </Typography>

//       <Paper elevation={3} sx={{ p: 3, textAlign: 'left' }}>
//         <Typography variant="h6" gutterBottom>
//           Booking Summary
//         </Typography>
//         <Typography><strong>Hostel Name:</strong> {bookingDetails.hostelName}</Typography>
//         <Typography><strong>Location:</strong> {bookingDetails.location}</Typography>
//         <Typography><strong>Duration:</strong> {bookingDetails.duration}</Typography>
//         <Typography><strong>Check-in Date:</strong> {bookingDetails.checkInDate}</Typography>
//         <Typography><strong>Amount Paid:</strong> {bookingDetails.amountPaid}</Typography>
//       </Paper>

//       <Grid container spacing={2} justifyContent="center">
//         <Grid item>
//           <Button variant="outlined" color="primary" onClick={onDownload}>
//             Download Receipt
//           </Button>
//         </Grid>
//         <Grid item>
//           <Button variant="contained" color="primary" onClick={onContinue}>
//             Back to Home
//           </Button>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default PaymentSuccess;
