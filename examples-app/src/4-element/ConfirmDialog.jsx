function Button(props) {
  return (
    <button className={`bg-${props.color}`}>
      <b>{props.children}</b>
    </button>
  );
}
function ConfirmDialog(props) {
  return (
    <div>
      <p>내용을 확인하셨으면 확인 버튼을 눌러주세요.</p>
      <Button color="green">확인</Button>
    </div>
  );
}

// {
//   type: 'div',
//   props: {
//     children: [
//       {
//         type: 'p',
//         props: {
//           children: ' 내용을 확인하셨으면 확인 버튼을 눌러주세요'
//         }
//       },
//       {
//         type: Button,
//         props: {
//           color: 'green',
//           children: '확인'
//         }
//       }
//     ]
//   }
// }

// {
//   type: 'div',
//   props: {
//     children: [
//       {
//         type: 'p',
//         props: {
//           children: ' 내용을 확인하셨으면 확인 버튼을 눌러주세요'
//         }
//       },
//       {
//         type: 'button',
//         props: {
//           className: 'bg-green',
//           children: {
//             type: 'b',
//             props: {
//               children: '확인'
//             }
//           }
//         }
//       }
//     ]
//   }
// }
