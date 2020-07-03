function jisuan () {
  var bj // 投注金額
  var pl1, pl2, pl3, pl4, pl5, pl6, pl7, pl8, pl9, pl10 // 賠率
  var bfb1, bfb2, bfb3, bfb4, bfb5, bfb6, bfb7, bfb8, bfb9, bfb10 // 盤口
  var jg1, jg2, jg3, jg4, jg5, jg6, jg7, jg8, jg9, jg10
  var bj = document.getElementById('bj').value

  // 提示訊息參數設定
  toastr.options = {
    closeButton: false, // 顯示關閉按鈕
    debug: false, // 除錯
    newestOnTop: false,  // 最新一筆顯示在最上面
    // progressBar: true, // 顯示隱藏時間進度條
    // positionClass: 'toast-bottom-right', // 位置的類別
    preventDuplicates: false, // 隱藏重覆訊息
    onclick: null, // 當點選提示訊息時，則執行此函式
    showDuration: '300', // 顯示時間(單位: 毫秒)
    hideDuration: '1000', // 隱藏時間(單位: 毫秒)
    timeOut: '2000', // 當超過此設定時間時，則隱藏提示訊息(單位: 毫秒)
    extendedTimeOut: '1000', // 當使用者觸碰到提示訊息時，離開後超過此設定時間則隱藏提示訊息(單位: 毫秒)
    showEasing: 'swing', // 顯示動畫時間曲線
    hideEasing: 'linear', // 隱藏動畫時間曲線
    showMethod: 'fadeIn', // 顯示動畫效果
    hideMethod: 'fadeOut' // 隱藏動畫效果
  }

  if (bj == '') {
    // $.alert.open({
    //   title: '警告視窗',
    //   type: 'warning',
    //   content: '請輸入下注金額'
    // })
    // swal({
    //   title: '請輸入下注金額',
    //   icon: 'error',
    //   button: '關閉'
    // })
    toastr.error('請輸入下注金額')
    return
  } else {
    if (bj > 0) {
      // 第一關結果------Start
      pl1 = document.getElementById('pl1').value
      if (pl1 == '') {
        // $.alert.open({
        //   title: '警告視窗',
        //   type: 'warning',
        //   content: '賠率不能為空'
        // })
        // swal({
        //   title: '賠率不能為空',
        //   icon: 'error',
        //   button: '關閉'
        // })
        toastr.error('賠率不能為空')
        return
      } else {
        if (pl1 > 0) {
          bfb1 = document.getElementById('bfb1').value
          var select1 = document.getElementById('select1').value
          if (select1 == '-') {
            bfb1 = bfb1 * (-1)
          }
          if (bfb1 == '') {
            // $.alert.open({
            //   title: '警告視窗',
            //   type: 'warning',
            //   content: '百分比不能為空'
            // })
            // swal({
            //   title: '百分比不能為空',
            //   icon: 'error',
            //   button: '關閉'
            // })
            toastr.error('百分比不能為空')
            return
          } else {
            if (bfb1 > 0) {
              jg1 = (100 + (pl1 * 1 * bfb1 * 1)) / 100
            } else if (bfb1 < 0) {
              // jg1 = (100 + (bfb1 * 1)) / 100
              jg1 = 1 + (bfb1 / 100)
            } else if (bfb1 == 0) {
              jg1 = 1
            } else {
              // $.alert.open({
              //   title: '警告視窗',
              //   type: 'warning',
              //   content: '百分比請輸入數字'
              // })
              // swal({
              //   title: '百分比請輸入數字',
              //   icon: 'warning',
              //   button: '關閉'
              // })
              toastr.warning('百分比請輸入數字')
              return
            }
          }
        } else {
          // $.alert.open({
          //   title: '警告視窗',
          //   type: 'warning',
          //   content: '賠率必須是數字且大於 0'
          // })
          // swal({
          //   title: '賠率必須是數字且大於 0',
          //   icon: 'warning',
          //   button: '關閉'
          // })
          toastr.warning('賠率必須是數字且大於 0')
          return
        }
      }
      //第一關結果------End

      //第二關結果------Start
      pl2 = document.getElementById('pl2').value
      if (pl2 == '') {
        jg2 = 1
      } else {
        if (pl2 > 0) {
          bfb2 = document.getElementById('bfb2').value
          var select2 = document.getElementById('select2').value
          if (select2 == '-') {
            bfb2 = bfb2 * (-1)
          }
          if (bfb2 == '') {
            // $.alert.open({
            //   title: '警告視窗',
            //   type: 'warning',
            //   content: '百分比不能為空'
            // })
            // swal({
            //   title: '百分比不能為空',
            //   icon: 'error',
            //   button: '關閉'
            // })
            toastr.error('百分比不能為空')
            return
          } else {
            if (bfb2 > 0) {
              jg2 = (100 + (pl2 * 1 * bfb2 * 1)) / 100
            } else if (bfb2 < 0) {
              //jg2 = (100 + (bfb2 * 1)) / 100
              jg2 = 1 + (bfb2 / 100)
            } else if (bfb2 == 0) {
              jg2 = 1
            } else {
              // $.alert.open({
              //   title: '警告視窗',
              //   type: 'warning',
              //   content: '百分比請輸入數字'
              // })
              // swal({
              //   title: '百分比請輸入數字',
              //   icon: 'warning',
              //   button: '關閉'
              // })
              toastr.warning('百分比請輸入數字')
              return
            }
          }
        } else {
          // $.alert.open({
          //   title: '警告視窗',
          //   type: 'warning',
          //   content: '賠率必須是數字且大於 0'
          // })
          // swal({
          //   title: '賠率必須是數字且大於 0',
          //   icon: 'warning',
          //   button: '關閉'
          // })
          toastr.warning('賠率必須是數字且大於 0')
          return
        }
      }
      //第二關結果------End

      //第三關結果------Start
      pl3 = document.getElementById('pl3').value
      if (pl3 == '') {
        jg3 = 1
      } else {
        if (pl3 > 0) {
          bfb3 = document.getElementById('bfb3').value
          var select3 = document.getElementById('select3').value
          if (select3 == '-') {
              bfb3 = bfb3 * (-1)
          }
          if (bfb3 == '') {
            // $.alert.open({
            //   title: '警告視窗',
            //   type: 'warning',
            //   content: '百分比不能為空'
            // })
            // swal({
            //   title: '百分比不能為空',
            //   icon: 'error',
            //   button: '關閉'
            // })
            toastr.error('百分比不能為空')
            return
          } else {
            if (bfb3 > 0) {
              jg3 = (100 + (pl3 * 1 * bfb3 * 1)) / 100
            } else if (bfb3 < 0) {
              //jg3 = (100 + bfb3 * 1) / 100
              jg3 = 1 + (bfb3 / 100)
            } else if (bfb3 == 0) {
              jg3 = 1
            } else {
              // $.alert.open({
              //   title: '警告視窗',
              //   type: 'warning',
              //   content: '百分比請輸入數字'
              // })
              // swal({
              //   title: '百分比請輸入數字',
              //   icon: 'warning',
              //   button: '關閉'
              // })
              toastr.warning('百分比請輸入數字')
              return
            }
          }
        } else {
          // $.alert.open({
          //   title: '警告視窗',
          //   type: 'warning',
          //   content: '賠率必須大於0'
          // })
          // swal({
          //   title: '賠率必須是數字且大於 0',
          //   icon: 'warning',
          //   button: '關閉'
          // })
          toastr.warning('賠率必須是數字且大於 0')
          return
        }
      }
      //第三關結果------End

      //第四關結果------Start
      pl4 = document.getElementById('pl4').value
      if (pl4 == '') {
        jg4 = 1
      } else {
        if (pl4 > 0) {
          bfb4 = document.getElementById('bfb4').value
          var select4 = document.getElementById('select4').value
          if (select4 == '-') {
            bfb4 = bfb4 * (-1)
          }
          if (bfb4 == '') {
            // $.alert.open({
            //   title: '警告視窗',
            //   type: 'warning',
            //   content: '百分比不能為空'
            // })
            // swal({
            //   title: '百分比不能為空',
            //   icon: 'error',
            //   button: '關閉'
            // })
            toastr.error('百分比不能為空')
            return
          } else {
            if (bfb4 > 0) {
              jg4 = (100 + (pl4 * 1 * bfb4 * 1)) / 100
            } else if (bfb4 < 0) {
              // jg4 = (100 + bfb4 * 1) / 100
              jg4 = 1 + (bfb4 / 100)
            } else if (bfb4 == 0) {
              jg4 = 1
            } else {
              // $.alert.open({
              //   title: '警告視窗',
              //   type: 'warning',
              //   content: '百分比請輸入數字'
              // })
              // swal({
              //   title: '百分比請輸入數字',
              //   icon: 'warning',
              //   button: '關閉'
              // })
              toastr.warning('百分比請輸入數字')
              return
            }
          }
        } else {
          // $.alert.open({
          //   title: '警告視窗',
          //   type: 'warning',
          //   content: '賠率必須大於0'
          // })
          // swal({
          //   title: '賠率必須是數字且大於 0',
          //   icon: 'warning',
          //   button: '關閉'
          // })
          toastr.warning('賠率必須是數字且大於 0')
          return
        }
      }
      //第四關結果------End

      //第五關結果------Start
      pl5 = document.getElementById('pl5').value
      if (pl5 == '') {
        jg5 = 1
      } else {
        if (pl5 > 0) {
          bfb5 = document.getElementById('bfb5').value
          var select5 = document.getElementById('select5').value
          if (select5 == '-') {
            bfb5 = bfb5 * (-1)
          }
          if (bfb5 == '') {
            // $.alert.open({
            //   title: '警告視窗',
            //   type: 'warning',
            //   content: '百分比不能為空'
            // })
            // swal({
            //   title: '百分比不能為空',
            //   icon: 'error',
            //   button: '關閉'
            // })
            toastr.error('百分比不能為空')
            return
          } else {
            if (bfb5 > 0) {
              jg5 = (100 + (pl5 * 1 * bfb5 * 1)) / 100
            } else if (bfb5 < 0) {
              //jg5 = (100 + bfb5 * 1) / 100
              jg5 = 1 + (bfb5 / 100)
            } else if (bfb5 == 0) {
              jg5 = 1
            } else {
              // $.alert.open({
              //   title: '警告視窗',
              //   type: 'warning',
              //   content: '百分比請輸入數字'
              // })
              // swal({
              //   title: '百分比請輸入數字',
              //   icon: 'warning',
              //   button: '關閉'
              // })
              toastr.warning('百分比請輸入數字')
              return
            }
          }
        } else {
          // $.alert.open({
          //   title: '警告視窗',
          //   type: 'warning',
          //   content: '賠率必須大於0'
          // })
          // swal({
          //   title: '賠率必須是數字且大於 0',
          //   icon: 'warning',
          //   button: '關閉'
          // })
          toastr.warning('賠率必須是數字且大於 0')
          return
        }
      }
      //第五關結果------End

      //第六關結果------Start
      pl6 = document.getElementById('pl6').value
      if (pl6 == '') {
        jg6 = 1
      } else {
        if (pl6 > 0) {
          bfb6 = document.getElementById('bfb6').value
          var select6 = document.getElementById('select6').value
          if (select6 == '-') {
            bfb6 = bfb6 * (-1)
          }
          if (bfb6 == '') {
            // $.alert.open({
            //   title: '警告視窗',
            //   type: 'warning',
            //   content: '百分比不能為空'
            // })
            // swal({
            //   title: '百分比不能為空',
            //   icon: 'error',
            //   button: '關閉'
            // })
            toastr.error('百分比不能為空')
            return
          } else {
            if (bfb6 > 0) {
              jg6 = (100 + (pl6 * 1 * bfb6 * 1)) / 100
            } else if (bfb6 < 0) {
              //jg6 = (100 + bfb6 * 1) / 100
              jg6 = 1 + (bfb6 / 100)
            } else if (bfb6 == 0) {
              jg6 = 1
            } else {
              // $.alert.open({
              //   title: '警告視窗',
              //   type: 'warning',
              //   content: '百分比請輸入數字'
              // })
              // swal({
              //   title: '百分比請輸入數字',
              //   icon: 'warning',
              //   button: '關閉'
              // })
              toastr.warning('百分比請輸入數字')
              return
            }
          }
        } else {
          // $.alert.open({
          //   title: '警告視窗',
          //   type: 'warning',
          //   content: '賠率必須是數字且大於 0'
          // })
          // swal({
          //   title: '賠率必須是數字且大於 0',
          //   icon: 'warning',
          //   button: '關閉'
          // })
          toastr.warning('賠率必須是數字且大於 0')
          return
        }
      }
      //第六關結果------End

      //第七關結果------Start
      pl7 = document.getElementById('pl7').value
      if (pl7 == '') {
        jg7 = 1
      } else {
        if (pl7 > 0) {
          bfb7 = document.getElementById('bfb7').value
          var select7 = document.getElementById('select7').value
          if (select7 == '-') {
            bfb7 = bfb7 * (-1)
          }
          if (bfb7 == '') {
            // $.alert.open({
            //   title: '警告視窗',
            //   type: 'warning',
            //   content: '百分比不能為空'
            // })
            // swal({
            //   title: '百分比不能為空',
            //   icon: 'error',
            //   button: '關閉'
            // })
            toastr.error('百分比不能為空')
            return
          } else {
            if (bfb7 > 0) {
              jg7 = (100 + (pl7 * 1 * bfb7 * 1)) / 100
            } else if (bfb7 < 0) {
              //jg7 = (100 + bfb7 * 1) / 100
              jg7 = 1 + (bfb7 / 100)
            } else if (bfb7 == 0) {
              jg7 = 1
            } else {
              // $.alert.open({
              //   title: '警告視窗',
              //   type: 'warning',
              //   content: '百分比請輸入數字'
              // })
              // swal({
              //   title: '百分比請輸入數字',
              //   icon: 'warning',
              //   button: '關閉'
              // })
              toastr.warning('百分比請輸入數字')
              return
            }
          }
        } else {
          // $.alert.open({
          //   title: '警告視窗',
          //   type: 'warning',
          //   content: '賠率必須是數字且大於 0'
          // })
          // swal({
          //   title: '賠率必須是數字且大於 0',
          //   icon: 'warning',
          //   button: '關閉'
          // })
          toastr.warning('賠率必須是數字且大於 0')
          return
        }
      }
      //第七關結果------End

      //第八關結果------Start
      pl8 = document.getElementById('pl8').value
      if (pl8 == '') {
        jg8 = 1
      } else {
        if (pl8 > 0) {
          bfb8 = document.getElementById('bfb8').value
          var select8 = document.getElementById('select8').value
          if (select8 == '-') {
            bfb8 = bfb8 * (-1)
          }
          if (bfb8 == '') {
            // $.alert.open({
            //   title: '警告視窗',
            //   type: 'warning',
            //   content: '百分比不能為空'
            // })
            // swal({
            //   title: '百分比不能為空',
            //   icon: 'error',
            //   button: '關閉'
            // })
            toastr.error('百分比不能為空')
            return
          } else {
            if (bfb8 > 0) {
              jg8 = (100 + (pl8 * 1 * bfb8 * 1)) / 100
            } else if (bfb8 < 0) {
              //jg8 = (100 + bfb8 * 1) / 100
              jg8 = 1 + (bfb8 / 100)
            } else if (bfb8 == 0) {
              jg8 = 1
            } else {
              // $.alert.open({
              //   title: '警告視窗',
              //   type: 'warning',
              //   content: '百分比請輸入數字'
              // })
              // swal({
              //   title: '百分比請輸入數字',
              //   icon: 'warning',
              //   button: '關閉'
              // })
              toastr.warning('百分比請輸入數字')
              return
            }
          }
        } else {
          // $.alert.open({
          //   title: '警告視窗',
          //   type: 'warning',
          //   content: '賠率必須是數字且大於 0'
          // })
          // swal({
          //   title: '賠率必須是數字且大於 0',
          //   icon: 'warning',
          //   button: '關閉'
          // })
          toastr.warning('賠率必須是數字且大於 0')
          return
        }
      }
      //第八關結果------End

      //第九關結果------Start
      pl9 = document.getElementById('pl9').value
      if (pl9 == '') {
        jg9 = 1
      } else {
        if (pl9 > 0) {
          bfb9 = document.getElementById('bfb9').value
          var select9 = document.getElementById('select9').value
          if (select9 == '-') {
            bfb9 = bfb9 * (-1)
          }
          if (bfb9 == '') {
            // $.alert.open({
            //   title: '警告視窗',
            //   type: 'warning',
            //   content: '百分比不能為空'
            // })
            // swal({
            //   title: '百分比不能為空',
            //   icon: 'error',
            //   button: '關閉'
            // })
            toastr.error('百分比不能為空')
            return
          } else {
            if (bfb9 > 0) {
              jg9 = (100 + (pl9 * 1 * bfb9 * 1)) / 100
            } else if (bfb9 < 0) {
              //jg9 = (100 + bfb9 * 1) / 100
              jg9 = 1 + (bfb9 / 100)
            } else if (bfb9 == 0) {
              jg9 = 1
            } else {
              // $.alert.open({
              //   title: '警告視窗',
              //   type: 'warning',
              //   content: '百分比請輸入數字'
              // })
              // swal({
              //   title: '百分比請輸入數字',
              //   icon: 'warning',
              //   button: '關閉'
              // })
              toastr.warning('百分比請輸入數字')
              return
            }
          }
        } else {
          // $.alert.open({
          //   title: '警告視窗',
          //   type: 'warning',
          //   content: '賠率必須是數字且大於 0'
          // })
          // swal({
          //   title: '賠率必須是數字且大於 0',
          //   icon: 'warning',
          //   button: '關閉'
          // })
          toastr.warning('賠率必須是數字且大於 0')
          return
        }
      }
      //第九關結果------End

      //第十關結果------Start
      pl10 = document.getElementById('pl10').value
      if (pl10 == '') {
        jg10 = 1
      } else {
        if (pl10 > 0) {
          bfb10 = document.getElementById('bfb10').value
          var select10 = document.getElementById('select10').value
          if (select10 == '-') {
            bfb10 = bfb10 * (-1)
          }
          if (bfb10 == '') {
            // $.alert.open({
            //   title: '警告視窗',
            //   type: 'warning',
            //   content: '百分比不能為空'
            // })
            // swal({
            //   title: '百分比不能為空',
            //   icon: 'error',
            //   button: '關閉'
            // })
            toastr.error('百分比不能為空')
            return
          } else {
            if (bfb10 > 0) {
              jg10 = (100 + (pl10 * 1 * bfb10 * 1)) / 100
            } else if (bfb10 < 0) {
              //jg10 = (100 + bfb10 * 1) / 100
              jg10 = 1 + (bfb10 / 100)
            } else if (bfb10 == 0) {
              jg10 = 1
            } else {
              // $.alert.open({
              //   title: '警告視窗',
              //   type: 'warning',
              //   content: '百分比請輸入數字'
              // })
              // swal({
              //   title: '百分比請輸入數字',
              //   icon: 'warning',
              //   button: '關閉'
              // })
              toastr.warning('百分比請輸入數字')
              return
            }
          }
        } else {
          // $.alert.open({
          //   title: '警告視窗',
          //   type: 'warning',
          //   content: '賠率必須是數字且大於 0'
          // })
          // swal({
          //   title: '賠率必須是數字且大於 0',
          //   icon: 'warning',
          //   button: '關閉'
          // })
          toastr.warning('賠率必須是數字且大於 0')
          return
        }
      }
      //第十關結果------End
      var sum
      if (bj * 1 != 0) {
        sum = bj * (jg1 * jg2 * jg3 * jg4 * jg5 * jg6 * jg7 * jg8 * jg9 * jg10) - bj

        // sum = bj * 1
        // if (jg1 * 1 != 0) {
        //   //sum = sum * jg1 * 1
        //   jg1 = jg1 * 1
        // }
        // if (jg2 * 1 != 0) {
        //   //sum = sum * jg2 * 1
        //   jg2 = jg2 * 1
        // }
        // if (jg3 * 1 != 0) {
        //   //sum = sum * jg3 * 1
        //   jg3 = jg3 * 1
        // }
        // if (jg4 * 1 != 0) {
        //   //sum = sum * jg4 * 1
        //   jg4 = jg4 * 1
        // }
        // if (jg5 * 1 != 0) {
        //   //sum = sum * jg5 * 1
        //   jg5 = jg5 * 1
        // }
        // if (jg6 * 1 != 0) {
        //   //sum = sum * jg6 * 1
        //   jg6 = jg6 * 1
        // }
        // if (jg7 * 1 != 0) {
        //   //sum = sum * jg7 * 1
        //   jg7 = jg7 * 1
        // }
        // if (jg8 * 1 != 0) {
        //   //sum = sum * jg8 * 1
        //   jg8 = jg8 * 1
        // }
        // if (jg9 * 1 != 0) {
        //   //sum = sum * jg9 * 1
        //   jg9 = jg9 * 1
        // }
        // if (jg10 * 1 != 0) {
        //   //sum = sum * jg10 * 1
        //   jg10 = jg10 * 1
        // }
      }
      if (sum > 1000000) {
        sum = 1000000
      }
      if (select1 == '全輸' || select2 == '全輸' || select3 == '全輸' || select4 == '全輸' || select5 == '全輸' || select6 == '全輸' || select7 == '全輸' || select8 == '全輸' || select9 == '全輸' || select10 == '全輸') {
        document.getElementById('jg').value = parseFloat(0).toFixed(0)
      } else {
        document.getElementById('jg').value = parseFloat(sum).toFixed(0)
      }
    } else {
      // $.alert.open({
      //   title: '警告視窗',
      //   type: 'warning',
      //   content: '下注金額必須是數字且大於 0'
      // })
      // swal({
      //   title: '下注金額必須是數字且大於 0',
      //   icon: 'warning',
      //   button: '關閉'
      // })
      toastr.warning('下注金額必須是數字且大於 0')
      return
    }
  }
}

function changeTwoDecimal_f (x) {
  var f_x = parseFloat(x)
  if (isNaN(f_x)) {
    // swal({
    //   title: '錯誤',
    //   text: 'function:changeTwoDecimal -> parameter error',
    //   icon: 'error',
    //   button: '關閉'
    // })
    toastr.error('function:changeTwoDecimal -> parameter error')
    return false
  }
  var f_x = Math.round(x * 100) / 100
  var s_x = f_x.toString()
  var pos_decimal = s_x.indexOf('.')
  if (pos_decimal < 0) {
    pos_decimal = s_x.length
    s_x += '.'
  }
  while (s_x.length <= pos_decimal + 2) {
    s_x += '0'
  }
  return s_x
}


function look1 (num) {
  if (num == '全贏') {
    document.getElementById('bfb1').disabled = false
    document.getElementById('bfb1').value = '100'
    document.getElementById('bfb1').disabled = true
  } else if (num == '全輸') {
    document.getElementById('bfb1').disabled = false
    document.getElementById('bfb1').value = '100'
    document.getElementById('bfb1').disabled = true
  } else if (num == '+') {
    document.getElementById('bfb1').disabled = false
    document.getElementById('bfb1').value = ''
  } else if (num == '-') {
    document.getElementById('bfb1').disabled = false
    document.getElementById('bfb1').value = ''
  } else if (num == '平') {
    document.getElementById('bfb1').disabled = false
    document.getElementById('bfb1').value = '0'
    document.getElementById('bfb1').disabled = true
  } else {
    document.getElementById('bfb1').disabled = false
    document.getElementById('bfb1').value = ''
  }
}

function look2 (num) {
  if (num == '全贏') {
    document.getElementById('bfb2').disabled = false
    document.getElementById('bfb2').value = '100'
    document.getElementById('bfb2').disabled = true
  } else if (num == '全輸') {
    document.getElementById('bfb2').disabled = false
    document.getElementById('bfb2').value = '100'
    document.getElementById('bfb2').disabled = true
  } else if (num == '+') {
    document.getElementById('bfb2').disabled = false
    document.getElementById('bfb2').value = ''
  } else if (num == '-') {
    document.getElementById('bfb2').disabled = false
    document.getElementById('bfb2').value = ''
  } else if (num == '平') {
    document.getElementById('bfb2').disabled = false
    document.getElementById('bfb2').value = '0'
    document.getElementById('bfb2').disabled = true
  } else {
    document.getElementById('bfb2').disabled = false
    document.getElementById('bfb2').value = ''
  }
}
function look3 (num) {
  if (num == '全贏') {
    document.getElementById('bfb3').disabled = false
    document.getElementById('bfb3').value = '100'
    document.getElementById('bfb3').disabled = true
  } else if (num == '全輸') {
    document.getElementById('bfb3').disabled = false
    document.getElementById('bfb3').value = '100'
    document.getElementById('bfb3').disabled = true
  } else if (num == '+') {
    document.getElementById('bfb3').disabled = false
    document.getElementById('bfb3').value = ''
  } else if (num == '-') {
    document.getElementById('bfb3').disabled = false
    document.getElementById('bfb3').value = ''
  } else if (num == '平') {
    document.getElementById('bfb3').disabled = false
    document.getElementById('bfb3').value = '0'
    document.getElementById('bfb3').disabled = true
  } else {
    document.getElementById('bfb3').disabled = false
    document.getElementById('bfb3').value = ''
  }
}

function look4 (num) {
  if (num == '全贏') {
    document.getElementById('bfb4').disabled = false
    document.getElementById('bfb4').value = '100'
    document.getElementById('bfb4').disabled = true
  } else if (num == '全輸') {
    document.getElementById('bfb4').disabled = false
    document.getElementById('bfb4').value = '100'
    document.getElementById('bfb4').disabled = true
  } else if (num == '+') {
    document.getElementById('bfb4').disabled = false
    document.getElementById('bfb4').value = ''
  } else if (num == '-') {
    document.getElementById('bfb4').disabled = false
    document.getElementById('bfb4').value = ''
  } else if (num == '平') {
    document.getElementById('bfb4').disabled = false
    document.getElementById('bfb4').value = '0'
    document.getElementById('bfb4').disabled = true
  } else {
    document.getElementById('bfb4').disabled = false
    document.getElementById('bfb4').value = ''
  }
}

function look5 (num) {
  if (num == '全贏') {
    document.getElementById('bfb5').disabled = false
    document.getElementById('bfb5').value = '100'
    document.getElementById('bfb5').disabled = true
  } else if (num == '全輸') {
    document.getElementById('bfb5').disabled = false
    document.getElementById('bfb5').value = '100'
    document.getElementById('bfb5').disabled = true
  } else if (num == '+') {
    document.getElementById('bfb5').disabled = false
    document.getElementById('bfb5').value = ''
  } else if (num == '-') {
    document.getElementById('bfb5').disabled = false
    document.getElementById('bfb5').value = ''
  } else if (num == '平') {
    document.getElementById('bfb5').disabled = false
    document.getElementById('bfb5').value = '0'
    document.getElementById('bfb5').disabled = true
  } else {
    document.getElementById('bfb5').disabled = false
    document.getElementById('bfb5').value = ''
  }
}

function look6 (num) {
  if (num == '全贏') {
    document.getElementById('bfb6').disabled = false
    document.getElementById('bfb6').value = '100'
    document.getElementById('bfb6').disabled = true
  } else if (num == '全輸') {
    document.getElementById('bfb6').disabled = false
    document.getElementById('bfb6').value = '100'
    document.getElementById('bfb6').disabled = true
  } else if (num == '+') {
    document.getElementById('bfb6').disabled = false
    document.getElementById('bfb6').value = ''
  } else if (num == '-') {
    document.getElementById('bfb6').disabled = false
    document.getElementById('bfb6').value = ''
  } else if (num == '平') {
    document.getElementById('bfb6').disabled = false
    document.getElementById('bfb6').value = '0'
    document.getElementById('bfb6').disabled = true
  } else {
    document.getElementById('bfb6').disabled = false
    document.getElementById('bfb6').value = ''
  }
}

function look7 (num) {
  if (num == '全贏') {
    document.getElementById('bfb7').disabled = false
    document.getElementById('bfb7').value = '100'
    document.getElementById('bfb7').disabled = true
  } else if (num == '全輸') {
    document.getElementById('bfb7').disabled = false
    document.getElementById('bfb7').value = '100'
    document.getElementById('bfb7').disabled = true
  } else if (num == '+') {
    document.getElementById('bfb7').disabled = false
    document.getElementById('bfb7').value = ''
  } else if (num == '-') {
    document.getElementById('bfb7').disabled = false
    document.getElementById('bfb7').value = ''
  } else if (num == '平') {
    document.getElementById('bfb7').disabled = false
    document.getElementById('bfb7').value = '0'
    document.getElementById('bfb7').disabled = true
  } else {
    document.getElementById('bfb7').disabled = false
    document.getElementById('bfb7').value = ''
  }
}

function look8 (num) {
  if (num == '全贏') {
    document.getElementById('bfb8').disabled = false
    document.getElementById('bfb8').value = '100'
    document.getElementById('bfb8').disabled = true
  } else if (num == '全輸') {
    document.getElementById('bfb8').disabled = false
    document.getElementById('bfb8').value = '100'
    document.getElementById('bfb8').disabled = true
  } else if (num == '+') {
    document.getElementById('bfb8').disabled = false
    document.getElementById('bfb8').value = ''
  } else if (num == '-') {
    document.getElementById('bfb8').disabled = false
    document.getElementById('bfb8').value = ''
  } else if (num == '平') {
    document.getElementById('bfb8').disabled = false
    document.getElementById('bfb8').value = '0'
    document.getElementById('bfb8').disabled = true
  } else {
    document.getElementById('bfb8').disabled = false
    document.getElementById('bfb8').value = ''
  }
}

function look9 (num) {
  if (num == '全贏') {
    document.getElementById('bfb9').disabled = false
    document.getElementById('bfb9').value = '100'
    document.getElementById('bfb9').disabled = true
  } else if (num == '全輸') {
    document.getElementById('bfb9').disabled = false
    document.getElementById('bfb9').value = '100'
    document.getElementById('bfb9').disabled = true
  } else if (num == '+') {
    document.getElementById('bfb9').disabled = false
    document.getElementById('bfb9').value = ''
  } else if (num == '-') {
    document.getElementById('bfb9').disabled = false
    document.getElementById('bfb9').value = ''
  } else if (num == '平') {
    document.getElementById('bfb9').disabled = false
    document.getElementById('bfb9').value = '0'
    document.getElementById('bfb9').disabled = true
  } else {
    document.getElementById('bfb9').disabled = false
    document.getElementById('bfb9').value = ''
  }
}

function look10 (num) {
  if (num == '全贏') {
    document.getElementById('bfb10').disabled = false
    document.getElementById('bfb10').value = '100'
    document.getElementById('bfb10').disabled = true
  } else if (num == '全輸') {
    document.getElementById('bfb10').disabled = false
    document.getElementById('bfb10').value = '100'
    document.getElementById('bfb10').disabled = true
  } else if (num == '+') {
    document.getElementById('bfb10').disabled = false
    document.getElementById('bfb10').value = ''
  } else if (num == '-') {
    document.getElementById('bfb10').disabled = false
    document.getElementById('bfb10').value = ''
  } else if (num == '平') {
    document.getElementById('bfb10').disabled = false
    document.getElementById('bfb10').value = '0'
    document.getElementById('bfb10').disabled = true
  } else {
    document.getElementById('bfb10').disabled = false
    document.getElementById('bfb10').value = ''
  }
}

// function MM_preloadImages () { //v3.0
//   var d = document
//   if (d.images) {
//     if (!d.MM_p) d.MM_p = new Array()
//     var i, j = d.MM_p.length, a = MM_preloadImages.arguments
//
//     for (i = 0; i < a.length; i++) {
//       if (a[i].indexOf('#') != 0) {
//         d.MM_p[j] = new Image
//         d.MM_p[j++].src = a[i]
//       }
//     }
//   }
// }
