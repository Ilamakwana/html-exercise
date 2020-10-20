
function billingFunction() {
    $(document).ready(function () {
        /*$('#same').click(function () {*/
            // console.log("hi");
            if ($('input[name="same"]').is(':checked')) {
                $('#billingName').val($('#shippingName').val());
                $('#billingPhone').val($('#shippingPhone').val());
                $('#billingAddress').val($('#shippingAddress').val());
                $('#billingCity').val($('#shippingCity').val());
                $('#billingState').val($('#shippingState').val());
                $('#billingZip').val($('#shippingZip').val());
            }
            else {
                $('#billingName').val('');
                $('#billingPhone').val('');
                $('#billingAddress').val('');
                $('#billingCity').val('');
                $('#billingState').val('');
                $('#billingZip').val('');
            }
        ///});
    });
}




