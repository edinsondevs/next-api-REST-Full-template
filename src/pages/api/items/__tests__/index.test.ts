import { createRequest, createResponse } from 'node-mocks-http';
import handler from '../index';
import dbConnect from '@/lib/dbConnect';
import Item from '@/models/Item';

jest.mock('@/lib/dbConnect');
jest.mock('@/models/Item');

describe('/api/items', () => {
  beforeEach(() => {
    // Limpiar todos los mocks antes de cada prueba para asegurar un estado limpio
    jest.clearAllMocks();
  });

  it('should return a list of items on GET', async () => {
    // Datos simulados para los elementos
    const mockItems = [{ name: 'Item 1' }, { name: 'Item 2' }];
    // Simular el método Item.find para que devuelva nuestros elementos simulados
    (Item.find as jest.Mock).mockResolvedValue(mockItems);

    // Crear un objeto de solicitud simulado para una solicitud GET
    const req = createRequest({
      method: 'GET',
    });
    // Crear un objeto de respuesta simulado
    const res = createResponse();

    // Llamar al manejador de la API con la solicitud y respuesta simuladas
    await handler(req as any, res as any);

    // Afirmaciones
    // Asegurarse de que dbConnect fue llamado una vez
    expect(dbConnect).toHaveBeenCalledTimes(1);
    // Asegurarse de que Item.find fue llamado una vez
    expect(Item.find).toHaveBeenCalledTimes(1);
    // Asegurarse de que el código de estado es 200 (OK)
    expect(res._getStatusCode()).toBe(200);
    // Asegurarse de que los datos JSON devueltos coinciden con nuestros elementos simulados
    expect(res._getJSONData()).toEqual({ success: true, data: mockItems });
  });

  it('should create a new item on POST', async () => {
    // Nuevos datos del elemento a crear
    const newItem = { name: 'New Item', description: 'Description of new item' };
    // Simular el elemento creado con un ID
    const createdItem = { _id: '123', ...newItem };
    // Simular el método Item.create para que devuelva el elemento creado
    (Item.create as jest.Mock).mockResolvedValue(createdItem);

    // Crear un objeto de solicitud simulado para una solicitud POST con los nuevos datos del elemento
    const req = createRequest({
      method: 'POST',
      body: newItem,
    });
    // Crear un objeto de respuesta simulado
    const res = createResponse();

    // Llamar al manejador de la API
    await handler(req as any, res as any);

    // Afirmaciones
    // Asegurarse de que dbConnect fue llamado una vez
    expect(dbConnect).toHaveBeenCalledTimes(1);
    // Asegurarse de que Item.create fue llamado con los nuevos datos del elemento
    expect(Item.create).toHaveBeenCalledWith(newItem);
    // Asegurarse de que el código de estado es 201 (Creado)
    expect(res._getStatusCode()).toBe(201);
    // Asegurarse de que los datos JSON devueltos coinciden con el elemento creado
    expect(res._getJSONData()).toEqual({ success: true, data: createdItem });
  });

  it('should return 405 for unsupported methods', async () => {
    // Crear un objeto de solicitud simulado para un método no compatible (PATCH)
    const req = createRequest({
      method: 'PATCH',
    });
    // Crear un objeto de respuesta simulado
    const res = createResponse();

    // Llamar al manejador de la API
    await handler(req as any, res as any);

    // Afirmaciones
    // Asegurarse de que el código de estado es 405 (Método no permitido)
    expect(res._getStatusCode()).toBe(405);
    // Asegurarse de que el encabezado 'Allow' contiene 'GET' y 'POST'
    expect(res._getHeaders().allow).toEqual(['GET', 'POST']);
  });
});