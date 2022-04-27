const upstat=(ids,get_param)=>{
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Update Status!'
      }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url:"backend.php",
                method:"post",
                async:false,
                data:{
                    "statss":get_param,
                    "idss":ids

                },
                success:function(data)
                {
                    console.log(data)
                    window.location.replace("index.php");
                }
            });
        }
      });
}
const jedit=(para)=>{
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Update Status!'
      }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url:"backend.php",
                method:"post",
                async:false,
                data:{
                    "idsss":para

                },
                success:function(data)
                {
                    console.log(data)
                    window.location.replace("index.php");
                }
            });
        }
      });
}