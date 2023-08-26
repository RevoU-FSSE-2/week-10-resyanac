const { ObjectId } = require('mongodb')

const getAllTransfers = async (req, res) => {
  try {
    const allTransfer = await req.db.collection('transfers').find().toArray()
    
    res.status(200).json({
      message: 'Transfer successfully retrieved',
      data: allTransfer
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const createTransfers = async (req, res) => {
  const { amount, currency, sourceAmount, destinationAccount } = req.body
  console.log(amount, currency, sourceAmount, destinationAccount, '<=================== TRANSFERS ==================');
  
  try {
    const newTransfer = await req.db.collection('transfers').insertOne({ 
      amount,
      currency,
      sourceAmount,
      destinationAccount,
      status: "pending"
    })
    res.status(200).json({
      message: 'Transfer successfully created',
      data: newTransfer
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}


async function updateTransfers(req, res) {
  const id = req.params.id;
  const { status } = req.body;
  
  try {  
    const transfer = await req.db.collection('transfers').updateOne(
    { _id: new ObjectId(id) },
    {
      $set: {
        status,
      },
    }
  );

  res.status(200).json({
    message: 'updated',
    data: transfer,
  });
    
  } catch (error) {
    res.status(500).json({
      message: 'failed',
      data: error,
    });
  }
}

const deleteTransfer = async (req, res) => {
  const id  = req.params;
  console.log(req.query, '<=================== DELETED ==================');
  const deleteTransfer = await req.db.collection('transfers').findOneAndUpdate(
    { _id: new ObjectId(id)},
    {
      $set: {
        is_deleted: true,
      },
    }
  );

  res.status(200).json({
    message: 'Deleted',
  });
}


  

module.exports = {
  getAllTransfers,
  createTransfers,
  updateTransfers,
  deleteTransfer

}