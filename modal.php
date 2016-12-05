<?php include 'header.php'; ?>

<div class="modal-example">
    
<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#modal1">oткрыть мoдaльнoе oкнo large</button>
<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#modal2">oткрыть мoдaльнoе oкнo small</button>
<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#modal3">oткрыть мoдaльнoе oкнo small2</button>
<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#modal4">oткрыть мoдaльнoе oкнo declining</button>
<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#modal5">oткрыть мoдaльнoе oкнo experience</button>


  
  <div class="modal fade" id="modal1" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 class="title-segoe">Modal window</h4>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="recipient-name" class="form-control-label">Recipient:</label>
              <input type="text" class="form-control" id="recipient-name">
            </div>
            <div class="form-group">
              <label for="message-text" class="form-control-label">Message:</label>
              <textarea class="form-control" id="message-text"></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="pinkBtn" data-dismiss="modal">Yes</button>
          <button type="button" class="pinkBtn">No</button>
        </div>
      </div>
    </div>
  </div>



</div>

<style>
    .modal-example{
        padding: 150px;
    }
    .modal-example>button{
        display: block;
        padding: 20px;
        width: 400px;
        background-color: #e22250;
        margin: 20px auto;
    }
</style>
<?php include 'footer.php'; ?>